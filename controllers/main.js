

const jwt = require('jsonwebtoken')
const CustomeApiError = require('../error/custom-error')
let name = "Nisan"

const login = async (req, res) => {
    const {username, password} = req.body

    if(!username || !password) {
        throw new CustomeApiError('Please provide username and password', 400)
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
    const luckNumb = Math.floor(Math.random() * 100)
    res.status(200).json({
        msg: `Hello ${name}, your secret number is ${luckNumb}`
    })
}


module.exports = {
    login, dashboard
}