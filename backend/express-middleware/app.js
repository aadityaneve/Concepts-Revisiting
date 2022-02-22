const express = require('express');
const app = express();

// app.use(logger);

console.clear();

app.get('/', (req, res) => {
    res.send('HOME PAGE');
});

app.get('/users', [logger, auth], (req, res) => {
    res.send('USERS PAGE');
});

function logger(req, res, next) {
    console.log('Logger Middleware');
    next();
}

function auth(req, res, next) {
    if (req.query.admin === 'true') {
        next();
    } else {
        res.send('No Auth');
    }
    /* console.log('Auth Middleware');
    next(); */
}

app.listen(3001);
