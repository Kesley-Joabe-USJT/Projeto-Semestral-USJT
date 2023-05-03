const express = require('express')
const cors = require('cors')

const app = express()

const conn = require('./db/conn')

// Config JSON response
app.use(express.json())

// Solve CORS
app.use(cors({ credentials: true, origin: 'http://127.0.0.1:3000' }))

// Public folder for images
app.use(express.static('public'))

// Routes
const UserRoutes = require('./routes/UserRoutes')

app.use('/users', UserRoutes)

app.listen(5000)