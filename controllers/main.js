

const jwt = require('jsonwebtoken')
const {BadRequestError} = require('../errors')
let name = "Nisan"

const login = async (req, res) => {
    const {username, password} = req.body

    if(!username || !password) {
        throw new badRequestError('Please provide username and password')
    }

    const id = new Date().getDate()
    const token = jwt.sign(
        {id, username}, 
        process.env.JWT_SECRET,
        {expiresIn: '30d'}
    )

    res.status(200).json({
        msg: "User created",
        token
    })
}


const dashboard = async (req, res) => {
    const luckyNumb = Math.floor(Math.random() * 100)
        res.status(200).json({
            msg: `Hello ${req.user.username}, your secret number is ${luckyNumb}`
        })
}


module.exports = {
    login, dashboard
}