const express = require('express')

const router = express.Router();

router.post('/api/user/signup', (req, res, next) => {
    const { email, password } = req.body;

    if(!email || typeof email !== 'string') {
        throw new Error('Provide valid email!');
    }

    res.send({})
})

module.exports = {
    signupUserRouter: router
}