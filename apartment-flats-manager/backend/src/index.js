const { start, app } = require('./server');
const express = require('express');
app.use(express.json());

const userController = require('./controllers/user.controller');
const flatController = require('./controllers/flat.controller');

app.use('/user', userController);
app.use('/flat', flatController);
app.use('/', (req, res) => {
    return res.status(200).send('Helloo Backend');
});

start();
