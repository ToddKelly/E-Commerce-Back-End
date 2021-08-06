const { Tag } = require('../models');
//creates the variable tagData that holds the array of objects 
const tagData = [
  {
    tag_name: 'practice wear',
  },
  {
    tag_name: 'practice wear',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'black',
  },
  {
    tag_name: 'right sticks',
  },
  {
    tag_name: 'left sticks',
  },
  {
    tag_name: 'team wear',
  },
];
//creates the function seedTags that creates the tagdata table of tage_names 
const seedTags = () => Tag.bulkCreate(tagData);
// exports the function seedTags 
module.exports = seedTags;