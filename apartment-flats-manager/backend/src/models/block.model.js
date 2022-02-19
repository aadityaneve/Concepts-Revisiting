const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema(
    {
        block_name: { type: Number, required: true },
        flat_id: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'flat',
                required: true,
            },
        ],
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Block = mongoose.model('block', blockSchema);

module.exports = Block;
