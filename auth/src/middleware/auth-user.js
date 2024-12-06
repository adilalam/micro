const jwt = require('jsonwebtoken');

const authUser = (req, res, next) => {

    if (!req.session?.jwt) {
        return next()
    }

    try {
        const payload = jwt.verify(req.session.jwt, process.env.JWT_SECRET);
        req.user = payload;
    } catch (error) { }

    next()
}

module.exports = {
    authUser
}