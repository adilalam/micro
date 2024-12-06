const requireAuth = (req, res, next) => {

    if (!req.user) {
        return res.status(401).send({message: "Not Authorized"})
    }
}

module.exports = {
    requireAuth
}