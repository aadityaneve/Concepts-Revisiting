const express = require('express');
const mongoose = require('mongoose');
const Flat = require('../models/flat.model');
const router = express.Router();

/* START */
/* END */

router.get('/', async (req, res) => {
    try {
        let flatId = req.query.flat;

        let page = +req.query.page || 1;
        let size = +req.query.limit || 3;
        let flat_in_block = req.query.block;

        let filterType = req.query.type;
        let sort = req.query.sort;

        if (flatId) {
            if (!flatId) {
                return res.status(200).send({
                    status: 'FAILED',
                    message: 'Please Enter Valid Falt Id',
                });
            }

            const flat = await Flat.findById({ _id: flatId }, { user_id: 1 })
                .lean()
                .exec();

            if (flat === null) {
                return res.status(200).send({
                    status: 'FAILED',
                    message: 'Invalid Flat Id',
                });
            }

            return res.status(200).send({ status: 'SUCCESS', flat });
        } else if (page && size && flat_in_block) {
            const offset = (page - 1) * size;

            const flat = await Flat.find({ flat_in_block })
                .skip(offset)
                .limit(size)
                .lean()
                .exec();

            const totalPages = Math.ceil(
                (await Flat.find({ flat_in_block })
                    .countDocuments()
                    .lean()
                    .exec()) / size
            );

            return res
                .status(200)
                .send({ status: 'SUCCESS', flat, totalPages: totalPages });
        } else if (filterType && sort) {
            const offset = (page - 1) * size;

            filterType = filterType.split('');
            filterType[0] = filterType[0].toUpperCase();
            filterType = filterType.join('');

            const flat = await Flat.find({ flat_type: filterType })
                .skip(offset)
                .limit(size)
                .sort({
                    flat_number:
                        sort === 'asc' || sort === 1
                            ? 1
                            : sort === 'des' || sort === -1
                            ? -1
                            : 1,
                })
                .lean()
                .exec();

            const totalPages = Math.ceil(
                (await Flat.find({ flat_type: filterType })
                    .countDocuments()
                    .lean()
                    .exec()) / size
            );

            return res
                .status(200)
                .send({ status: 'SUCCESS', flat, total_pages: totalPages });
        } else if (filterType) {
            const offset = (page - 1) * size;

            filterType = filterType.split('');
            filterType[0] = filterType[0].toUpperCase();
            filterType = filterType.join('');

            const flat = await Flat.find({ flat_type: filterType })
                .skip(offset)
                .limit(size)
                .lean()
                .exec();

            const totalPages = Math.ceil(
                (await Flat.find({ flat_type: filterType })
                    .countDocuments()
                    .lean()
                    .exec()) / size
            );

            return res
                .status(200)
                .send({ status: 'SUCCESS', flat, total_pages: totalPages });
        } else if (page && size && sort) {
            const offset = (page - 1) * size;

            const flat = await Flat.find({})
                .skip(offset)
                .limit(size)
                .sort({
                    flat_number:
                        sort === 'asc' || sort === 1
                            ? 1
                            : sort === 'des' || sort === -1
                            ? -1
                            : 1,
                })
                .lean()
                .exec();

            const totalPages = Math.ceil(
                (await Flat.find({}).countDocuments().lean().exec()) / size
            );

            return res
                .status(200)
                .send({ status: 'SUCCESS', flat, total_pages: totalPages });
        } else if (page && size) {
            const offset = (page - 1) * size;

            const flat = await Flat.find({})
                .skip(offset)
                .limit(size)
                .lean()
                .exec();

            const totalPages = Math.ceil(
                (await Flat.find({}).countDocuments().lean().exec()) / size
            );

            return res
                .status(200)
                .send({ status: 'SUCCESS', flat, total_pages: totalPages });
        }
    } catch (e) {
        return res.status(500).send({ status: 'FAILED', message: e.message });
    }
});

/* START: GET: search query: list of all residents on perticular flat */
/* router.get('/', async (req, res) => {
    try {
        let flatId = req.query.flat;

        if (!flatId) {
            return res.status(200).send({
                status: 'FAILED',
                message: 'Please Enter Valid Falt Id',
            });
        }

        const flat = await Flat.findById({ _id: flatId }, { user_id: 1 })
            .lean()
            .exec();

        if (flat === null) {
            return res.status(200).send({
                status: 'FAILED',
                message: 'Invalid Flat Id',
            });
        }

        return res.status(200).send({ status: 'SUCCESS', flat });
    } catch (e) {
        return res.status(500).send({ status: 'FAILED', message: e.message });
    }
}); */
/* END: GET: search query: list of all residents on perticular flat */

/* START: GET: search query: search by block name */
/* router.get('/', async (req, res) => {
    try {
        let page = +req.query.page || 1;
        let size = +req.query.limit || 3;
        let flat_in_block = req.query.block || 'A';

        const offset = (page - 1) * size;

        const flat = await Flat.find({ flat_in_block })
            .skip(offset)
            .limit(size)
            .lean()
            .exec();

        const totalPages = Math.ceil(
            (await Flat.find({ flat_in_block })
                .countDocuments()
                .lean()
                .exec()) / size
        );

        return res
            .status(200)
            .send({ status: 'SUCCESS', flat, totalPages: totalPages });
    } catch (e) {
        return res.status(500).send({ status: 'FAILED', message: e.message });
    }
}); */
/* END: GET: search query: search by block name */

/*START: GET all flats => query: page && limit */
/* router.get('/', async (req, res) => {
    try {
        let page = +req.query.page || 1;
        let size = +req.query.limit || 5;

        const offset = (page - 1) * size;

        const flat = await Flat.find({}).skip(offset).limit(size).lean().exec();

        const totalPages = Math.ceil(
            (await Flat.find({}).countDocuments().lean().exec()) / size
        );

        return res
            .status(200)
            .send({ status: 'SUCCESS', flat, total_pages: totalPages });

        // const flat = await Flat.find({}).populate('user_id');

        // return res.status(201).send({ status: 'SUCCESS', flat });
    } catch (e) {
        return res.status(500).send({ status: 'FAILED', message: e.message });
    }
}); */
/*END: GET all flats => query: page && limit */

router.patch('/:flat_id', async (req, res) => {
    try {
        userIds = req.body.user_id.trim().split(' ');

        const flat = await Flat.findByIdAndUpdate(
            req.params.flat_id,
            {
                user_id: userIds,
            },
            { new: true }
        );

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
