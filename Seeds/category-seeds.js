// creates a variable of categoryData that can be called upon to seed the database through that variable
const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Sticks',
  },
  {
    category_name: 'Skates',
  },
  {
    category_name: 'Socks',
  },
  {
    category_name: 'Helmets',
  },
  {
    category_name: 'Jerseys',
  },
];
//creates the variable(function) seedCategories that holds the value of the above array 
const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;