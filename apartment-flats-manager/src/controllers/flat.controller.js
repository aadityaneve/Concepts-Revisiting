const express = require('express');
const mongoose = require('mongoose');
const Flat = require('../models/flat.model');
const router = express.Router();

router.post('/:flat_id', async (req, res) => {
    try {
        userIds = req.body.user_id.trim().split(' ');

        const flat = await Flat.findByIdAndUpdate(req.params.flat_id, {
            user_id: userIds,
        });

        return res.status(201).send({ status: 'SUCCESS', flat });
    } catch (e) {
        return res.status(500).send({ status: 'FAILED', message: e.message });
    }
});

router.post('/', async (req, res) => {
    try {
        userIds = req.body.user_id.trim().split(' ');

        const flat = await Flat.create({
            flat_type: req.body.flat_type,
            flat_in_block: req.body.flat_in_block,
            flat_number: req.body.flat_number,
            user_id: userIds,
        });

        return res.status(201).send({ status: 'SUCCESS', flat });
    } catch (e) {
        return res.status(500).send({ status: 'FAILED', message: e.message });
    }
});

module.exports = router;
