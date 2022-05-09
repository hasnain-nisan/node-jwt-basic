

const login = async (req, res) => {
    res.send('Fake Login/Register/Signup Route')
}


const dashboard = async (req, res) => {
    const luckNumb = Math.floor(Math.random() * 100)
    res.status(200).json({
        msg: `Hello, your secret number is ${luckNumb}`
    })
}


module.exports = {
    login, dashboard
}