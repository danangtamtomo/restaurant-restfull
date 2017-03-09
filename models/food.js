var mongoose = require('mongoose')

var foodSchema = mongoose.Schema({
  name: String,
  price: Number,
  expired_date: Date
}, {
  timestamps: true
})

var Food = mongoose.model('Food', foodSchema)

module.exports = Food
