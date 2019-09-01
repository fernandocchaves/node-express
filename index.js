const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require('./src/routes/users')
const app = express()
app.use(bodyParser.urlencoded({extended: false}))
const port = 3030

userRoutes(app)
app.get('/', (request, response) => response.send('data'))
app.listen(port, () => 'servidor respondendo');
