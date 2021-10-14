const express = require('express');
const cors = require('cors');
const compression = require('compression');

const searchCepRouter = require('./routes/searchCep');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(compression());

app.use('/cep', searchCepRouter);

module.exports = app;