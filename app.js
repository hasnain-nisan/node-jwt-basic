console.log('JWT basic in node');


require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

//middleware
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')


//json_middleware
app.use(express.static('./public'))
app.use(express.json())


//middleware
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


//Frontend view route
// app.get('/', (req, res) => {
//     res.send(`<div style="display:flex; align-items:center; flex-direction:column; text-decoration:underline">
//         <h1 >JWT basic in MERN</h1>
//     </div>`)
// })

//port
const port = process.env.PORT|| 5000
const start = async () => {
    try {
        app.listen(port, console.log(`Server is listening at port: ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()