const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        user_name: { type: String, required: true },
        gender: { type: String, default: 'male' },
        age: { type: Number, default: 18 },
        phone_number: {
            type: Number,
            min: 100000000,
            max: 9999999999,
            required: true,
            unique: true,
        },
        /* flat_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'flat',
            required: true,
        }, */
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const User = mongoose.model('user', userSchema);

module.exports = User;
