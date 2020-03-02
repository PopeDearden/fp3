
require('dotenv').config()
const { SERVER_PORT, CONNECTION_STRING, SECRET } = process.env
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const app = express()
const managerController = require('./managerController')


app.use(express.json())
app.use(
    session({
        secret: SECRET,
        resave: false, 
        saveUninitialized: true,
    })
)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    }
}).then(dbInstance => {

    app.set('db', dbInstance)
    app.listen(SERVER_PORT, () => console.log(`Server is up and running on port: ${SERVER_PORT}`))
    console.log('Database connected.')
})


app.put('/api/manager/', managerController.getManager)
app.get('/api/check-manager', managerController.checkManager)
app.get('/api/logout', managerController.logout)
// app.listen(SERVER_PORT, ()=> console.log(`${SERVER_PORT} wild chickens laying eggs`))