const express = require('express')
const cors = require('cors')
const potteryController = require('./controller/PotteryController')
const db = require('./db')
const logger = require('morgan')

const app = express()

const PORT = process.env.PORT || 3001

app.use(express.static(`${__dirname}/client/build`))
app.use(express.json())
app.use(cors())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))

//routes
app.post('/create', potteryController.createPotteryDetails)
app.get('/types/:types', potteryController.getPotteryByTypes)
app.put('/update/:id', potteryController.updatePottery)
app.delete('/delete/:id', potteryController.deletePottery)
app.get('/types', potteryController.getTypeDetails)
app.get('/', potteryController.getPotteryDetails)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
