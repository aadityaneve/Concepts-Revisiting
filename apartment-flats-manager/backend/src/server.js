const express = require('express');
const connect = require('./configs/db');
const app = express();

const PORT = process.env.PORT || 5000;

const start = async () => {
    await connect();
    app.listen(PORT, () => {
        console.log(`LISTENING ON SERVER ${PORT}`);
    });
};

module.exports = {
    start,
    app,
};
