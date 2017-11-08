const express = require('express')
const routes = require('./routes')
const models = require('./models')
const handlebars = require('express-handlebars')
const morgan = require('morgan')

module.exports = (db) => {
  const Course = models(db)

  express()
    .engine('handlebars', handlebars({defaultLayout: 'main', layoutsDir: 'src/views'}))
    .set('view engine', 'handlebars')
    .set('views', 'src/views')
    .use(morgan('tiny'))
    .get('/', routes.home(Course))
    .get('/course/:id', routes.course(Course))
    .get('/author/:id', routes.author(Course))
    .listen(3000,
      () => console.log('Up'))
}
