const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// middleware
app.use(express.json());
app.use(cors());

// routes
const productRoute = require('./routes/product.route');

app.get('/', (req, res) => {
    res.send('A well structured inventory api is coming soon!')
})

app.use('/api/v1/product', productRoute)

module.exports = app;