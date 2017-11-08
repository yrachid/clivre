const mongoose = require('mongoose')

const course = require('./models')

mongoose.Promise = Promise

const DB_URL = process.env.MONGO_URL

const create = () =>
  mongoose
    .connect(DB_URL, {useMongoClient: true})
    .then(db => course(db))
    .then(Course =>
      Course.create({
        title: 'Rails For Zombies',
        author: {
          name: 'Code School'
        },
        details: 'Rails',
        duration: '6 meses',
        publication: new Date(),
        language: 'ruby',
        content: {
          totalLessons: 2,
          lessons: [{
            title: 'Testing rails',
            type: 'video',
            author: {
              name: 'Code School'
            }
          }]
        }
      }))
    .then(course => console.log(course))
    .catch(error => console.log(error.message))

const getContentByAuthorName = () =>
  mongoose
    .connect(DB_URL, {useMongoClient: true})
    .then(db => course(db))
    .then(Course =>
      Course.find({'author.name': 'Code School'}, 'content').exec())
    .then(content => console.log(content))
    .catch(error => console.log('Error ', error.message))

const getCourseByLessonId = () =>
  mongoose
    .connect(DB_URL, {useMongoClient: true})
    .then(db => course(db))
    .then(Course =>
      Course.find({'content.lessons._id': '5a0280fc65fb2ce2c73a0ac1'}).exec())
    .then(content => console.log(content))
    .catch(error => console.log('Error ', error.message))
