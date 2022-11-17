const {DataTypes} = require('sequelize')
const {User} = require('./user')
const {db} = require('../util/database')
const user = require('./user')

  let Product = db.define('product', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        product_name: DataTypes.STRING,
        product_img: DataTypes.STRING,
        product_description: DataTypes.STRING,
        class: DataTypes.STRING,
        price: DataTypes.INTEGER,

    })
  let Cart = db.define('cart', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
  })

//   let CartProducts = db.define('cart_products', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true,
//     },
//   })

  Cart.belongsTo(User)
  User.hasMany(Cart)
  Product.hasMany(Cart)
  Cart.belongsTo(Product)
//   CartProducts.hasMany(Cart)
//   CartProducts.hasMany(Product)


  module.exports = {Product, Cart}