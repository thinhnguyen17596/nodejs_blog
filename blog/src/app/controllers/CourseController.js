const Course = require('../models/Course')
const { mongooseToObjet } = require('../../util/mongoose')

class CourseController {

    // GET /courses/:slug
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then(course => {
            res.render('courses/show', { course: mongooseToObjet(course) })
            })
            .catch(next)
    }
    // GET /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }
    // POST /courses/store
    store(req, res, next) {
        // res.render('courses/create')
    }
}

module.exports = new CourseController()
