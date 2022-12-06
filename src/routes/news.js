const express = require('express')
const router = express.Router()

const newController = require('../controllers/NewsController')


router.param('id', function (req, res, next, id) {
    console.log('CALLED ONLY ONCE')
    console.log(id)
    next()
})

router.use('/:id', newController.id)
router.use('/page', newController.page)
router.use('/', newController.index)

module.exports = router
