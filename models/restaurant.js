var mongoose = require('mongoose')

var restaurantSchema = mongoose.Schema({
  name: String,
  owner: String,
  address: String,
  open_status: Boolean
}, {
  timestamps: true
})

var Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant
