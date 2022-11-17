require('dotenv').config()

const express = require('express')
const server = express()
const cors = require('cors')

const {db} = require('./util/database')
const {SERVER_PORT} = process.env
const {Product} = require('./models/product')
const {seed} = require('./seed')
const {User} = require('./models/user')
const {register, login} = require('./controllers/auth')
const {isAuthenticated} = require('./middleware/isAuthenticated')
const {addToCart, getCart, deleteCart} = require('./controllers/cartController')

// Middleware
server.use(express.json())
server.use(cors())

//endpoints
server.get('/all-products', async(req, res) => {
    let results = await Product.findAll()
    res.status(200).send(results)
})

server.get('/engine-mods', async(req, res) => {
    let results = await Product.findAll({where: {class: 'Engine'}})
    res.status(200).send(results)
})

server.get('/steering-mods', async(req, res) => {
    let results = await Product.findAll({where: {class: 'Steering'}})
    res.status(200).send(results)
})

server.get('/wheels', async(req, res) => {
    let results = await Product.findAll({where: {class: 'Wheels'}})
    res.status(200).send(results)
})

server.get('/suspension-mods', async(req, res) => {
    let results = await Product.findAll({where: {class: 'Suspension'}})
    res.status(200).send(results)
})

server.get('/accessories', async(req, res) => {
    let results = await Product.findAll({where: {class: 'Accessories'}})
    res.status(200).send(results)
})

server.get('/brake-mods', async(req, res) => {
    let results = await Product.findAll({where: {class: 'Brake'}})
    res.status(200).send(results)
})

//AUTH
server.post('/register', register)
server.post('/login', login)

//AUTH REQUIRED
server.get('/cart/:id/:headerToken', isAuthenticated, getCart)
server.post('/cart', addToCart)
server.delete('/cart/:productId/:userId', deleteCart)

// db.sync({force:true})
// .then(() => {
//     return seed()
// }) 
server.listen(SERVER_PORT, () => console.log(`Running on Port ${SERVER_PORT}`))