const { Model, DataTypes } = require('sequelize');
const { Product, Tag } = require('.');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // id primary key
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  // product id
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Product 
    }
  },

  // tag id
  tag_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Tag
    }
  }

  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
