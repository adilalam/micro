const express = require('express')

const router = express.Router();

router.get('/api/user/signout', async (req, res) => {
    res.send("currrent user")
})

module.exports = {
    signoutUserRouter: router
}