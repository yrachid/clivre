const express = require('express')
const routes = require('./routes')
const models = require('./models')

module.exports = (db) => {
  const Course = models(db)

  express()
    .get('/', routes.home())
    .get('/courses', routes.courses(Course))
    .listen(3000,
      () => console.log('Up'))
}
