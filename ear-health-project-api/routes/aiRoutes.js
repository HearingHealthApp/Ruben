// installing necessary dependencies to set up the routes
const express = require("express");
const router = express.Router();

const { runPrompt } = require("../openai.js")

//route to get the response from the ai
router.get("/response", async (req,res, next) => {
    try {
        const {average} = req.body

        const response = await runPrompt(average)

        return res.status(200).json({response})
    }catch(err) {
        next(err)
    }
})

module.exports = router;