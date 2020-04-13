
require('dotenv').config()
const { SERVER_PORT, CONNECTION_STRING, SECRET } = process.env
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const app = express()
const managerController = require('./managerController')
const directorController = require('./directorController')
const studentController = require('./studentController')
const hybridController = require('./hybridController')

app.use( express.static( `${__dirname}/../build` ) );

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
app.put('/api/user/update-order', studentController.updateOrder)
app.get('/api/logout', directorController.logOut)
app.get('/api/admin/get-directors', managerController.getDirectors)
app.get('/api/samples', studentController.getSamples)
app.get('/api/check-director', directorController.checkDirector)
app.get('/api/check-student', studentController.checkStudent)
app.get('/api/check-manager', managerController.checkManager)
app.get('/api/logout', managerController.logout)
app.get('/api/student/in-progress', studentController.getStudentInProgressOrders)
app.get('/api/director/in-progress', directorController.getInProgress)
app.get('/api/director/collected', directorController.getCollected)
app.get('/api/director/confirmed', directorController.getConfirmed)
app.get('/api/director/students', directorController.getStudents)
app.get('/api/director/samples', directorController.getDirectorSamples)
app.get('/api/student/collected', studentController.getStudentCollectedOrders)
app.get('/api/student/confirmed', studentController.getStudentConfirmedOrders)
app.get('/api/admin/summaries', managerController.getSummary)

app.get('/api/hybrid/sample-order', hybridController.getSampleOrders)
app.get('/api/hybrid/invoices', hybridController.getInvoices)
app.get('/api/hybrid/finals', hybridController.getFinal)
app.get('/api/director/info', directorController.getStage)
app.get('/api/student/stage', studentController.checkStudentStage)
app.get('/api/director/remaining', directorController.getRemaining)
app.get('/api/student-info', directorController.getStudents)
app.get('/api/admin/collectedTotals', managerController.getCollectedTotals)
app.get('/api/director/invoice', directorController.getInvoice)
app.get('/api/director/unconfirmed-count', directorController.getUnconfirmed)

app.put('/api/admin/get-director/:id', managerController.getDirector)
app.put('/api/admin/update-director/:id', managerController.updateDirector)
app.put('/api/admin/new-request/:id', managerController.newRequest)
app.put('/api/director/user/:id', directorController.getStudent)
app.put('/api/director/update/user/:id', directorController.updateStudent)
app.put('/api/hybrid/invoice', hybridController.updateInvoice)
app.put('/api/director/final', directorController.createFinal)
app.put('/api/final/:id', hybridController.getOneFinal)
app.put('/api/final/update/:id', hybridController.updateOrderSent)
app.put('/api/hybrid/get-one-sample/:id', hybridController.getOneSample)
app.put('/api/get-one-order/:id', studentController.getOneOrder)
app.put('/api/director/student-totals/:id', directorController.getStudentTotals)
app.put('/api/director/student-confirm/:id', directorController.updateStudentOrderConfirm)
app.put('/api/director/student-unconfirm/:id', directorController.updateStudentOrderUnConfirm)

app.post('/api/create-manager', managerController.createManager)
app.post('/api/create-director', directorController.createDirector)
app.post('/api/director/create-user', directorController.createUser)
app.post('/api/user/create-order', studentController.createOrder)
// app.listen(SERVER_PORT, ()=> console.log(`${SERVER_PORT} wild chickens laying eggs`))