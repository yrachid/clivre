const courses =
  (Course) =>
    (request, response) => Course
      .find({})
      .exec()
      .then(courses => response
        .json(courses))
      .catch(error => response
        .status(500)
        .json({error: error.message}))

const home =
  () => (_, response) => response.sendStatus(200)

module.exports = {home, courses}
