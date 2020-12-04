const mongoose = require('mongoose')
const Schema = mongoose.Schema

const burgerSchema = new Schema({
  name: String,
  protein: {
    type: String, 
    enum: ["Beef", "Chicken", "Wagyu", "Tuna", "Plant"], 
    default: "Beef"
  },
  ingredients: [String],
  temp: {
    type: String,
    enum: ["Rare", "Medium Rare", "Medium", "Cardboard"]
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Burger', burgerSchema)