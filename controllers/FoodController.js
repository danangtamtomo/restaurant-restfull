const Food = require('../models/Food')

var FoodController = {}

FoodController.getFoods = function (req, res, next) {
  Food.find({})
    .then(function (foods) {
      res.send(foods)
    })
}

FoodController.getFood = function (req, res, next) {
  Food.find({
    _id: req.params.id
  })
    .then(function (food) {
      res.send(food)
    })
}

FoodController.createFood = function (req, res, next) {
  var food = new Food(req.body)
  food.save()
    .then(function (food) {
      res.send({
        status: 'Ok',
        message: 'New food has been created',
        food: food
      })
    }).catch(function (err) {
    res.send({
      status: 'Error',
      message: err
    })
  })
}

FoodController.updateFood = function (req, res, next) {
  Food.update({
    _id: req.params.id
  }, {
    $set: req.body
  })
    .then(function (err, food) {
      res.send({
        status: 'Ok',
        message: `Food has been updated`,
        updated_food: food
      })
    })
}

FoodController.deleteFood = function (req, res, next) {
  Food.remove({
    _id: req.params.id
  })
    .then(function () {
      res.send({
        status: 'Ok',
        message: `The food has been deleted`
      })
    })
    .catch(function (err) {
      if (err) {
        res.send({
          status: 'Error',
          message: err
        })
      }
    })
}
module.exports = FoodController
