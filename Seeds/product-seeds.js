const { Product } = require('../models');
// creates the variable productData that holds the array of objests.
const productData = [
  {
    product_name: 'Composite Stick',
    price: 114.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Supreme Skates',
    price: 490.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Practice Socks',
    price: 22.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'HP 5000 Helmet',
    price: 112.99,
    stock: 10,
    category_id: 3,
  },
  {
    product_name: 'Game Jersey',
    price: 79.99,
    stock: 18,
    category_id: 2,
  },
];
// creates the seedProducts function that seeds the database with array of objects in the variable product data 
const seedProducts = () => Product.bulkCreate(productData);
//exports seedProducts 
module.exports = seedProducts;