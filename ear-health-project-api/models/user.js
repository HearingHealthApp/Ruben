//importing necessary dependencies
const db = require("../db")
const bcrypt = require("bcrypt")
const { BCRYPT_WORK_FACTOR } = require("../config")
const { BadRequestError, UnauthorizedError } = require("../utils/errors")

class User {

    //function that will register general users based on required inputted credentials

    static async register(credentials) {

        //required fields that will be taken from our register input form
        const requiredFields = ["username", "email", "password", "first_name", "last_name"]

        //iterate through the required fields and check if one is missing
        //if so, throw an error
        requiredFields.forEach(field => {
            if(!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body`)
            }
        })

        //lowercase the email so that it is not case sensitive when doing checks
        const lowercasedEmail = credentials.email.toLowerCase()

        //hash the user's password using bcrypt and salt 
        //generate our salt using our work factor
        const salt =  await bcrypt.genSalt(BCRYPT_WORK_FACTOR)

        //use salt to hash our pasword 
        const hashedPassword = await bcrypt.hash(credentials.password, salt)

        //create the user query to post data into the database
        const userQuery = `
        INSERT INTO users (username, email, password, first_name, last_name)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
        `;

        //values we will assign 
        const values = [credentials.username, lowercasedEmail, hashedPassword, credentials.first_name, credentials.last_name]

        //posting to the db
        const result = await db.query(userQuery, values)

        //get the user from the query 
        const user = result.rows[0]

        //return the user 
        return user
    }

    //function that will login the user if the password and email combination match
    static async login(credentials) {
        //required fields are email and password
        const requiredFields = ["email", "password"]

        //iterate through the required fields and check if one is missing
        //if so, throw an error
        requiredFields.forEach(field => {
            if(!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body`)
            }
        })

        //check if the email entered by the user exists in the DB.
        const user = await User.fetchUserByEmail(credentials.email)

        //if user exists, check if password is valid and return the user if so

        if (user) {
            const isPasswordValid = await bcrypt.compare(credentials.password, user.password)
            if (isPasswordValid) {
                return user
            }
        }

        //send error message if password isn't valid 
        throw new UnauthorizedError("Invalid password")

    }

    //fetch an existing user based on an email
    static async fetchUserByEmail(email) {
        //throw an error if there is no email 
        if (!email) {
            throw new BadRequestError("No email provided")
        }
        //select from the table the user where the email matches the input
        const query = `SELECT * FROM users WHERE email = $1`

        const result = await db.query(query, [email.toLowerCase()])

        const user = result.rows[0]

        return user 
    }
}

module.exports = User
