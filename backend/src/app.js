const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

const app = express();
require('dotenv').config();

app.use(morgan('dev'));
app.use(cors())



app.use(require('./routes/users'))

module.exports=app;