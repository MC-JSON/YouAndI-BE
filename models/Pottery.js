const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Pottery = new Schema(
  {
    name: { type: String },
    types: { type: String },
    description: { type: String },
    price: { type: String },
    image: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Pottery', Pottery)
