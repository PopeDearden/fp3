  
require('dotenv').config()
const express = require('express')
const massive = require ('massive')
const {SERVER_PORT, CONNECTION_STRING, SECRET} = process.env
const session = require ('express-session')
const app = express()


app.use(
    session({
        secret: SECRET,
        resave: false, 
        saveUninitialized: true,
        rejectUnauthorized: false,
        session: SECRET,
    })
)

massive({
connectionString: CONNECTION_STRING,
ssl: {
    rejectUnauthorized: false,
  }
}
)
.catch(err=>console.log(err))


app.use(express.json())

app.listen(SERVER_PORT, ()=> console.log(`${SERVER_PORT} wild chickens laying eggs`))