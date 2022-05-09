console.log('JWT basic in node');


require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

//routeFunc
const mainRoute = require('./routes/main')

//middleware
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')


//json_middleware
app.use(express.static('./public'))
app.use(express.json())


//routes
app.use('/api/v1', mainRoute)


//middleware
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

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