const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const app = express()
const routes = require('./routes/index')
const port = process.env.PORT

app.listen(port, () => console.log(`Express server is running on ${port}`))