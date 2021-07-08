const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();

// Settings
app.set(
  'port', 
  process.env.PORT || 3000
);

// DB connection
const {mongoose} = require('./database');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes
app.use('', require('./routes/machine.routes'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`); 
});