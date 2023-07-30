//importing necessary dependencies
const db = require("../db");
const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../config");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");
const { convertSnakeToCamel } = require("../utils/formatters");

class User {
  //function that will register general users based on required inputted credentials

  static async register(credentials) {
    //required fields that will be taken from our register input form
    const requiredFields = [
      "username",
      "email",
      "password",
      "firstName",
      "lastName",
    ];

    // iterate through the required fields and check if one is missing
    // if so, throw an error
    requiredFields.forEach((field) => {
      if (!credentials.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body`);
      }
    });

    // lowercase the email so that it is not case sensitive when doing checks
    const lowercasedEmail = credentials.email.toLowerCase();

    if (credentials.email.indexOf("@") <= 0) {
      throw new BadRequestError("Invalid email");
    }

    // make sure no user already exists in the system with the email
    // if one does, throw an error
    const existingEmail = await User.fetchUserByEmail(credentials.email);

    // if user with that email is found, throw an error saying its a duplicate
    if (existingEmail) {
      throw new BadRequestError(`Duplicate email: ${credentials.email}`);
    }

    // check if there's a user with the same email
    const existingUsername = await User.fetchUserByUsername(
      credentials.username
    );

    // if user with that username is found, throw an error saying its a duplicate
    if (existingUsername) {
      throw new BadRequestError(`Duplicate username: ${credentials.username}`);
    }

    // hash the user's password using bcrypt and salt
    // generate our salt using our work factor
    const salt = await bcrypt.genSalt(BCRYPT_WORK_FACTOR);

    // use salt to hash our pasword
    const hashedPassword = await bcrypt.hash(credentials.password, salt);

    // create the user query to post data into the database
    const userQuery = `
        INSERT INTO users (username, email, password, first_name, last_name)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
        `;

    // values we will assign
    const values = [
      credentials.username,
      lowercasedEmail,
      hashedPassword,
      credentials.firstName,
      credentials.lastName,
    ];

    // posting to the db
    const result = await db.query(userQuery, values);

    // get the user from the query
    const user = result.rows[0];

    // return the user
    return convertSnakeToCamel(user);
  }

  // function to register a doctor
  static async registerDoctor(credentials) {
    //required fields that will be taken from our register input form
    const requiredFields = [
      "username",
      "email",
      "password",
      "firstName",
      "lastName",
      "registrationNumber",
    ];

    //iterate through the required fields and check if one is missing
    //if so, throw an error
    requiredFields.forEach((field) => {
      if (!credentials.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body`);
      }
    });

    //lowercase the email so that it is not case sensitive when doing checks
    const lowercasedEmail = credentials.email.toLowerCase();

    if (credentials.email.indexOf("@") <= 0) {
      throw new BadRequestError("Invalid email.");
    }

    // make sure no user already exists in the system with the email
    // if one does, throw an error
    const existingEmail = await User.fetchUserByEmail(credentials.email);

    // if user with that email is found, throw an error saying its a duplicate
    if (existingEmail) {
      throw new BadRequestError(`Duplicate email: ${credentials.email}`);
    }

    // check if there's a user with the same email
    const existingUsername = await User.fetchUserByUsername(
      credentials.username
    );

    // if user with that username is found, throw an error saying its a duplicate
    if (existingUsername) {
      throw new BadRequestError(`Duplicate username: ${credentials.username}`);
    }

    //hash the user's password using bcrypt and salt
    //generate our salt using our work factor
    const salt = await bcrypt.genSalt(BCRYPT_WORK_FACTOR);

    //use salt to hash our pasword
    const hashedPassword = await bcrypt.hash(credentials.password, salt);

    //create the user query to post data into the database
    const userQuery = `
        INSERT INTO users (username, email, password, first_name, last_name, is_doctor)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
        `;

    //values we will assign
    const userValues = [
      credentials.username,
      lowercasedEmail,
      hashedPassword,
      credentials.firstName,
      credentials.lastName,
      true,
    ];

    //posting to the db
    const userResult = await db.query(userQuery, userValues);

    //get the user from the query
    let user = userResult.rows[0];

    // get the user id from our query to the user table
    const userId = user.user_id;

    // create a doctor query that passes the doctor specific data
    const doctorQuery = `
    INSERT INTO doctors (user_id, registration_number)
    VALUES ($1, $2)
    RETURNING specialties, registration_number, verified 
    `;

    // store the values that we will pass into our doctor table query
    const doctorValues = [userId, credentials.registrationNumber];

    // now we execte the query and store its result

    const doctorData = await db.query(doctorQuery, doctorValues);

    // get the first result row and store that data
    const doctor = doctorData.rows[0];

    //update the content of user to include the doctor data
    user = {
      ...user,
      ...doctor,
    };

    // return the user with the doctor data
    return convertSnakeToCamel(user);
  }

  // function that will login the user if the password and email combination match
  static async login(credentials) {
    //required fields are email and password
    const requiredFields = ["email", "password"];

    //iterate through the required fields and check if one is missing
    //if so, throw an error
    requiredFields.forEach((field) => {
      if (!credentials.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body`);
      }
    });

    //check if the email entered by the user exists in the DB.
    let user = await User.fetchUserByEmail(credentials.email);

    //if user exists, check if password is valid and return the user if so

    if (user) {
      const isPasswordValid = await bcrypt.compare(
        credentials.password,
        user.password
      );
      if (isPasswordValid) {
        if (user.is_doctor) {
          const doctorData = await User.fetchDoctorById(user.user_id);

          user = {
            ...user,
            ...doctorData,
          };
        }
        return convertSnakeToCamel(user);
      }
    }

    //send error message if password isn't valid
    throw new UnauthorizedError("Invalid email/password combination");
  }

  // fetch an existing user based on an email
  static async fetchUserByEmail(email) {
    //throw an error if there is no email
    if (!email) {
      throw new BadRequestError("No email provided");
    }
    //select from the table the user where the email matches the input
    const query = `SELECT * FROM users WHERE email = $1`;

    const result = await db.query(query, [email.toLowerCase()]);

    const user = result.rows[0];

    return convertSnakeToCamel(user);
  }

  // fetch an existing user based on username
  static async fetchUserByUsername(username) {
    // throw an error if no username is provided
    if (!username) {
      throw new BadRequestError("No username provided");
    }

    // select from the users table the the user that matches the username
    const query = `SELECT * FROM users WHERE username = $1`;

    // convert the provided username to all lowercase and use it as the reference
    // username in the query
    const result = await db.query(query, [username.toLowerCase()]);

    const user = result.rows[0];

    return convertSnakeToCamel(user);
  }

  // fetches data for a doctor from the doctors table based i=on a provided user ID
  static async fetchDoctorById(userId) {
    // throw an error if no username is provided
    if (!userId) {
      throw new BadRequestError("No user ID provided");
    }

    // select from the doctors table the data that matches the user ID
    const query = `SELECT specialties, registration_number, description, verified FROM doctors WHERE user_id = $1`;

    // convert the provided username to all lowercase and use it as the reference
    // username in the query
    const result = await db.query(query, [userId]);

    const doctorData = result.rows[0];

    return doctorData;
  }

  static async getUserImage(userId) {
    // throw an error if no username is provided
    if (!userId) {
      throw new BadRequestError("No user ID provided");
    }

    //select the user's image key
    const query = `SELECT image FROM users WHERE user_id = $1`

    //the actual value taht we will use to get the image key
    const value = [userId]

    const result = await db.query(query, value)

    return result;
  }
}

module.exports = User;
