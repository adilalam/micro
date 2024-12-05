const express = require('express')

const router = express.Router();

router.get('/api/user/current-user', async (req, res) => {
    res.send("currrent user")
})

module.exports = {
    currentUserRouter: router
}