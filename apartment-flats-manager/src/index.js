const { start, app } = require('./server');
const express = require('express');
app.use(express.json());


start();
