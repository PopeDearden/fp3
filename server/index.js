
require('dotenv').config()
const { SERVER_PORT, CONNECTION_STRING, SECRET } = process.env
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const app = express()
const managerController = require('./managerController')
const directorController = require('./directorController')
const studentController = require('./studentController')


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


app.put('/api/student', studentController.getStudent)
app.put('/api/manager/', managerController.getManager)
app.put('/api/director/', directorController.getDirector)
app.get('/api/logout', directorController.logOut)


app.get('/api/check-director', directorController.checkDirector)
app.get('/api/check-student', studentController.checkStudent)
app.get('/api/check-manager', managerController.checkManager)
app.get('/api/logout', managerController.logout)

app.post('/api/create-manager', managerController.createManager)
app.post('/api/create-director', directorController.createDirector)
app.post('/api/director/create-user', directorController.createUser)
app.post('/api/user/create-order', studentController.createOrder)
// app.listen(SERVER_PORT, ()=> console.log(`${SERVER_PORT} wild chickens laying eggs`))