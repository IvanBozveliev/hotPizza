const isAuthorization = (req, res, next) => {
     
    if (req.user.roles !== 'admin' && req.user.roles !== 'editor') {
        return res.status(401).json({ message: 'You are not authorization to do that!!!' })
    }
    next();

}

module.exports = isAuthorization;