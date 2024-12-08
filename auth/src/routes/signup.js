const express = require('express')
const { User } = require('../models/user');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/api/user/signup', async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || typeof email !== 'string') {
        throw new Error('Provide valid email!');
    }

    const existUser = await User.findOne({ email });

    if (existUser) {
        throw new Error('Email in used!');
    }

    const user = await User.create({ email, password })
    await user.save();

    const userJwt = jwt.sign({
        id: user.id,
        email: user.email
    }, process.env.JWT_SECRET);

    req.session = {
        jwt: userJwt
    };

    res.status(201).send({ user, token: userJwt });
})

module.exports = {
    signupUserRouter: router
}