const Burger = require('../models/burger')

module.exports = {
  new: newBurger,
  create,
  index
}

function newBurger(req, res) {
  res.render('burgers/new')
}

function create(req, res) {
  req.body.ingredients = req.body.ingredients.replace(/\s*,\s*/g, ',');
  if (req.body.ingredients) req.body.ingredients = req.body.ingredients.split(',');
  Burger.create(req.body, function(err, burger) {
    console.log(burger)
    res.redirect('/burgers')
  })
}

function index(req, res) {
  Burger.find({}, function(err, burgers) {
    res.render('burgers/index', {burgers})
  })
}