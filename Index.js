const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const app = express()
const routes = require('./Routes/routes')
const port = process.env.PORT

app.use(express.json())
app.use(cors('*'))
app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/account', routes.account, function (req, res, next) {
  next()
})
/*app.use('/auth', routes.auth, function (req, res, next) {
  next()
})*/
app.use('/product', routes.product, function (req, res, next) {
  next()
})

app.listen(port, () => console.log(`Express server is running on ${port}`))
