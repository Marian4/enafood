import express from 'express'
import User from './db/models/User.model'
import { usersRoutes } from './routes/users.routes'
import { companiesRoutes } from './routes/companies.routes'

const mongoose = require('./db/conn')

const app = express()

app.use(express.json())

app.use('/users', usersRoutes)
app.use('/companies', companiesRoutes)

app.listen(3000, () => console.log("Server is running!"))
