const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const rubbishWord = require('./rubbishWord')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  let career = req.body.career
  let rubbish = rubbishWord(career)
  res.render('index', { rubbish })
})

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`express app listen on port ${port}`)
})