const express = require('express')
const { authUser } = require('../middleware/auth-user');
const { requireAuth } = require('../middleware/require-auth');

const router = express.Router();

router.post('/api/user/current-user', [authUser, requireAuth], async (req, res) => {
    res.send({ user: req.user || null });
})

module.exports = {
    currentUserRouter: router
}