const express = require('express')
const router = express.Router()
const burgersCtrl = require('../controllers/burgers')

router.get('/new', burgersCtrl.new)
router.post('/', burgersCtrl.create)
router.get('/', burgersCtrl.index)

module.exports = router