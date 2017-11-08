const home =
  (Course) =>
    (_, response) => Course
      .find({})
      .exec()
      .then(courses => {
        console.log(courses)
        response
          .render('home', {courses})
      })
      .catch(error => response
        .status(500)
        .json({error: error.message}))

const course =
  (Course) =>
    (request, response) => Course
      .findOne({_id: request.params.id})
      .exec()
    .then(course => {
      console.log(course)
      response
        .render('course', course)
    })
    .catch(error => response
      .status(500)
      .json({error: error.message}))

module.exports = {home, course}
