const {DataTypes} = require('sequelize')

const {db} = require('../util/database')

module.exports = {
    Orders : db.define('orders', {
       id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
       },
       product_id: DataTypes.INTEGER,
       amount: DataTypes.INTEGER,
       billing_address: DataTypes.STRING,
       state: DataTypes.STRING,
       country: DataTypes.STRING,
       user_id: DataTypes.INTEGER,
       first_name: DataTypes.STRING,
       last_name: DataTypes.STRING
    })
}