const { Product } = require("../models/product")
const { User } = require("../models/user")

 module.exports = {

 addProduct: async (req, res) => {
    try {
        const {product_name, product_img, product_description, price, userId} = req.body
        await Product.create({product_name, product_img, product_description, price, userId})
        res.sendStatus(200)
    } catch (error) {
        console.log('ERROR IN getCurrentProducts')
        console.log(error)
        res.sendStatus(400)
    }
},

getCurrentProducts: async (req, res) => {
    try {
        const {userId} = req.params
        const products = await Product.findAll({
            where: {userId: userId},
            include: [{
                model: User,
                required: true,
                attributes: [`username`]
            }]})
        res.status(200).send(products)
    } catch (error) {
        console.log('ERROR IN getCurrentProducts')
        console.log(error)
        res.sendStatus(400)
    }
},

deleteProduct: async (req, res) => {
    try {
        const {id} = req.params
        await Product.destroy({where: {id: +id}})
        res.sendStatus(200)
    } catch (error) {
        console.log('ERROR IN getCurrentProducts')
        console.log(error)
        res.sendStatus(400)
    }
}
}