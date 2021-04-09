const express = require('express')
const app = express()
const port = 4396

const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
const router = require('./router/router')


app.engine('html', require('express-art-template'))

app.use('/public', express.static('./public'))
app.use('/node_modules', express.static('./node_modules'))

app.use(router)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })