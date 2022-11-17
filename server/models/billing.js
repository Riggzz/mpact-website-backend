const {DataTypes} = require('sequelize')

const {db} = require('../util/database')

module.exports = {
    Billing : db.define('billing', {
       id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
       },
       account_number: DataTypes.INTEGER,
       user_cvv: DataTypes.INTEGER,
       billing_address: DataTypes.STRING,
       state: DataTypes.STRING,
       first_name: DataTypes.STRING,
       last_name: DataTypes.STRING,
       email: DataTypes.STRING,
       zipcode: DataTypes.INTEGER,
       country: DataTypes.STRING,
       card_expiry_date: DataTypes.STRING
    })
}