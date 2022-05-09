

const CustomeApiError = require('../error/custom-error')
let name = "Nisan"

const login = async (req, res) => {
    const {username, password} = req.body

    if(!username || !password) {
        throw new CustomeApiError('Please provide username and password', 400)
    }

    res.send('Fake Login/Register/Signup Route')
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