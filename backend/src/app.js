const express = require('express')
const cors = require('cors')
const {errors} = require('celebrate')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

//tells app to listen to port 3333
module.exports = app