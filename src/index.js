const express = require('express')
const path = require('path')
const app = express()
const morgan = require('morgan')
const port = 3000
const exphbs = require('express-handlebars');

app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', exphbs.engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

console.log('PATH: ', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/news', (req, res) => {
    res.render('news')
})

app.get('/search', (req, res) => {
    res.render('search')
})

app.post('/search', (req, res) => {
    res.render('search')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
