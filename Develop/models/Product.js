// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const { Category } = require('.');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    //id
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  //product name
  product_name: {
    type: DataTypes.STRING,
    allowNull: false 
  },

  //price
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: {
    min: 0.00,
    isDecimal: true 
    }
  },

  //stock amount
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
    min: 0.00,
    isNumeric: true
    }
  },

  //foreign for the category table
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Category
    }
  }
},

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
