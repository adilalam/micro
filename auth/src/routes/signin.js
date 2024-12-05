const express = require('express')

const router = express.Router();

router.get('/api/user/signin', async (req, res) => {
    res.send("currrent user")
})

module.exports = {
    signinUserRouter: router
}