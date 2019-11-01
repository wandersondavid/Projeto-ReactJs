const mongoose = require('mongoose');

const UserShema = new mongoose.Schema({
    email: String,
})

module.exports = mongoose.model('User', UserShema);