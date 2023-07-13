//installing necessary dependencies to set up the routes
const express = require("express")

//model import
const User = require("../models/user")
const {createUserJwt} = require("../utils/tokens")
const { SECRET_KEY } = require("../config")

//setting up the router
const router = express.Router()

//post route for registering 
router.post("/register", async (req, res, next) => {
    try {
    //register the user
    const user = await User.register(req.body)
    //create the token 
    const token = createUserJwt(user)
    //return the user and the token as a json object
    return res.status(201).json({user: user, token: token})

    } catch(err) {
        next(err)
    }

})

//post route for login
router.post("/login", async (req, res,next) => {
    try {
        const user = await User.login(req.body)

        const token = createUserJwt(user)

        return res.status(200).json({user: user, token: token})
        
        } catch(err) {
            next(err)
        }
})