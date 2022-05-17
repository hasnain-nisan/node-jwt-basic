
const jwt = require('jsonwebtoken')
const CustomeApiError = require('../error/custom-error')

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        throw new CustomeApiError('No token found', 401)
    }

    const token = authHeader.split(' ')[1]
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {id, username} = decoded
        req.user = {id, username}
        next()
    } catch (error) {
        throw new CustomeApiError('Not authorize to access this route', 401)
    }
}

module.exports = authMiddleware