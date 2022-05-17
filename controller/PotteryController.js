const Pottery = require('../models/Pottery.js')
const Types = require('../models/Types.js')

const getPotteryDetails = async (req, res) => {
  try {
    const pottery = await Pottery.find()
    return res.status(200).json({ pottery })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getTypeDetails = async (req, res) => {
  try {
    const types = await Types.find()
    return res.status(200).json({ types })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createPotteryDetails = async (req, res) => {
  try {
    const pottery = await new Pottery(req.body)
    await pottery.save()
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getPotteryByTypes = async (req, res) => {
  try {
    const pottery = await Pottery.find({ types: req.params.types })
    res.send(pottery)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updatePottery = async (req, res) => {
  try {
    const { id } = req.params
    const pottery = await Pottery.findByIdAndUpdate(id, req.body)
    res.status(200).json(pottery)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deletePottery = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Pottery.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).json('pottery deleted')
    }
    throw new Error('pottery not found')
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getPotteryDetails,
  createPotteryDetails,
  getTypeDetails,
  getPotteryByTypes,
  updatePottery,
  deletePottery
}
