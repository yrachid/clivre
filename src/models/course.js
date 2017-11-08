const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Author = new Schema({
  name: String,
  bio: String,
  email: String,
  avatar: String,
})

const Lesson = new Schema({
  class: String,
  title: String,
  type: String,
  url: String,
  author: Author,
  preview: String,
  views: Number,
})

const Course = new Schema({
  title: String,
  author: Author,
  description: String,
  details: String,
  duration: String,
  publication: Date,
  content: {
    totalLessons: Number,
    lessons: [Lesson],
  },
  language: String,
  image: String,
})

module.exports = db => db.model('Course', Course)
