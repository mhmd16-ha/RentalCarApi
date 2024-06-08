import express from 'express'
import UserRouter from './Modules/Users/Users.Routes.js'
import CarRouter from './Modules/Cars/Cars.Routes.js'
import RentalRouter from './Modules/Rental/Rental.Routes.js'
const app = express()
const port = 3000
app.use(express.json())
app.use('/Users',UserRouter)
app.use('/Cars',CarRouter)
app.use('/Rental',RentalRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))