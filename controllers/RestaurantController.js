const Restaurant = require('../models/Restaurant')

var RestaurantController = {}

RestaurantController.getRestaurant = function (req, res, next) {
  Restaurant.find({})
    .then(function (restaurants) {
      res.send(restaurants)
    })
}

RestaurantController.getRestaurant = function (req, res, next) {
  Restaurant.find({
    _id: req.body.id
  })
    .then(function (restaurant) {
      res.send(restaurant)
    })
}

RestaurantController.createRestaurant = function (req, res, next) {
  var restaurant = new Restaurant(req.body)
  reataurant.save()
    .then(function (food) {
      res.send({
        status: 'Ok',
        message: 'New restaurant has been created',
        restaurant: restaurant
      })
    }).catch(function (err) {
    res.send({
      status: 'Error',
      message: err
    })
  })
}

RestaurantController.updateRestaurant = function (req, res, next) {
  Restaurant.update({
    _id: req.params.id
  }, {
    $set: req.body
  })
    .then(function (err, food) {
      res.send({
        status: 'Ok',
        message: `The restaurant has been updated`,
        updated_restaurant: restaurant
      })
    })
}

RestaurantController.deleteRestaurant = function (req, res, next) {
  Restaurant.remove({
    _id: req.params.id
  })
    .then(function () {
      res.send({
        status: 'Ok',
        message: `The restaurant has been deleted`
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
module.exports = RestaurantController
