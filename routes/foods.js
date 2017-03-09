var express = require('express')
var router = express.Router()
const FoodController = require('../controllers/FoodController')

router.get('/', FoodController.getFoods)
router.get('/', FoodController.getFood)
router.post('/', FoodController.createFood)
router.put('/', FoodController.updateFood)
router.delete('/', FoodController.deleteFood)

module.exports = router
