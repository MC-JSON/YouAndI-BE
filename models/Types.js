const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Types = new Schema(
  {
    typesName: { type: String },
    image: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Types', Types)
