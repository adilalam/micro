const express = require('express')
const jwt = require('jsonwebtoken');
const { User } = require('../models/user');
const bcrypt = require('bcryptjs')

const router = express.Router();

router.post('/api/user/signin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || typeof email !== 'string') {
        throw new Error('Provide valid email!');
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
        throw new Error('Invalid credentials.');
    }

    const passwordMatch = await bcrypt.compare(password, existingUser.password)

    if (!passwordMatch) {
        throw new Error('Invalid credentials.')
    }

    const userJwt = jwt.sign({
        id: existingUser.id,
        email: existingUser.email
    }, process.env.JWT_SECRET);

    req.session = {
        jwt: userJwt
    };

    res.status(200).send({ user: existingUser, token: userJwt });
})

module.exports = {
    signinUserRouter: router
}