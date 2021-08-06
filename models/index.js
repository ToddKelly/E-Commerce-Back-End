// import models
const Product = require('./Product');
const Category = require('./Catagory');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// The association can also be created from the Car side
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Product, {
  foreignKey: 'category_id',
  
});

Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    foreignKey: "product_id"
  },
  // Define an alias for when data is retrieved
});

Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    foreignKey: "tag_id"
  },
  // Define an alias for when data is retrieved

});

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};