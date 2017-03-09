var express = require('express')
var router = express.Router()
const FoodController = require('../controllers/FoodController')

router.get('/', FoodController.getFoods)
router.get('/:id', FoodController.getFood)
router.post('/', FoodController.createFood)
router.put('/:id', FoodController.updateFood)
router.delete('/:id', FoodController.deleteFood)

module.exports = router
