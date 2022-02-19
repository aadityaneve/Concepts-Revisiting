const { start, app } = require('./server');
const cors = require('cors');
const express = require('express');
app.use(cors());
app.use(express.json());

const userController = require('./controllers/user.controller');
const flatController = require('./controllers/flat.controller');

app.use('/user', userController);
app.use('/flat', flatController);
app.use('/', (req, res) => {
    return res.status(200).send('Helloo Backend');
});

start();
