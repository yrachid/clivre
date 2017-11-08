const home =
  (Course) =>
    (_, response) => Course
      .find({})
      .exec()
      .then(courses => response
          .render('home', {courses}))
      .catch(error => response
        .status(500)
        .json({error: error.message}))

const course =
  (Course) =>
    (request, response) => Course
      .findOne({_id: request.params.id})
      .exec()
      .then(course =>response
        .render('course', course))
      .catch(error => response
        .status(500)
        .json({error: error.message}))

const author =
  (Course) =>
    (request, response) => Course
      .find({'author._id': request.params.id})
      .exec()
      .then(courses => ({author: courses[0].author, courses}))
      .then(context => response.render('author', context))
      .catch(error => response
        .status(500)
        .json({error: error.message}))

module.exports = {home, course, author}
