const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect(
        `mongodb+srv://aadityaneve:aadityaneve12$@cluster0.aiizm.mongodb.net/apartment_flats_manager`
    );
};

module.exports = connect;
