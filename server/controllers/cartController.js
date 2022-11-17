const { createSearchParams } = require('react-router-dom')
const {Cart, Product} = require('../models/product.js')
const {User} = require('../models/user.js')

module.exports = {
    addToCart: async (req, res) => {
        const {
            productId, userId
        } = req.body
        await Cart.create({productId, userId})
        res.status(200).send('added to cart')
    },

    getCart: async (req, res) => {
        const {id} = req.params
        let myCart = await Cart.findAll({where: {userId: id}, include: Product})
        res.status(200).send(myCart)
    },

    deleteCart: async (req, res) => {
        const {productId, userId} = req.params
        await Cart.destroy({where: [{productId: productId}, {userId: userId}]})
        res.status(200).send('deleted form cart')
    }
}