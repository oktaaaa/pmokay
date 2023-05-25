const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const app = express()
require("dotenv").config();
app.use(bodyParser.json())

const connectDB = require('./config/db')
const cors = require('cors')

app.use(cors())
dotenv.config({path: './config/config.env'})

connectDB()

//routes
app.use('/', require('./routes'))
app.listen(3000)

// npx create-react-app fe