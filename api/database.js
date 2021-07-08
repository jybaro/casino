const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.set(
    'mongoUrl', 
    process.env.MONGO_URL || 'mongodb://localhost:27017/test'
);

mongoose.connect(app.get('mongoUrl'))
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;