const mongoose = require('mongoose');

const flatSchema = new mongoose.Schema(
    {
        flat_type: { type: String, required: true },
        flat_in_block: {
            type: String,
            required: true,
            maxlength: 1,
            validate: /[A-E]/,
        },
        flat_number: { type: Number, required: true, min: 100, max: 999 },
        user_id: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user',
                required: true,
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Flat = mongoose.model('flat', flatSchema);

module.exports = Flat;
