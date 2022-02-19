const express = require('express');
const User = require('../models/user.model');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const user = await User.create({
            user_name: req.body.user_name,
            gender: req.body.gender,
            age: req.body.age,
            phone_number: req.body.phone_number,
        });

        return res.status(201).send({ status: 'SUCCESS', user });
    } catch (e) {
        res.status(500).send({ status: 'FAILED', message: e.message });
    }
});

module.exports = router;
