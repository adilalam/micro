const jwt = require('jsonwebtoken');

const authUser = (req, res, next) => {

    // if (!req.session?.jwt) {
    //     return next()
    // }

    const token = req.headers['authorization']?.split(' ')[1]; // 'Bearer token_value'

    if (!token) {
        return next()
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = payload;
    } catch (error) { }

    next()
}

module.exports = {
    authUser
}