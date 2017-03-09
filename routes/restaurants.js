var express = require('express')
var router = express.Router()
const RestaurantController = require('../controllers/RestaurantController')

router.get('/', RestaurantController.getRestaurants)
router.get('/', RestaurantController.getRestaurant)
router.post('/', RestaurantController.createRestaurant)
router.put('/', RestaurantController.updateRestaurant)
router.delete('/', RestaurantController.deleteRestaurant)

module.exports = router
