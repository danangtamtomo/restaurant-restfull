var express = require('express')
var router = express.Router()
const RestaurantController = require('../controllers/RestaurantController')

router.get('/', RestaurantController.getRestaurants)
router.get('/:id', RestaurantController.getRestaurant)
router.post('/', RestaurantController.createRestaurant)
router.put('/:id', RestaurantController.updateRestaurant)
router.delete('/:id', RestaurantController.deleteRestaurant)

module.exports = router
