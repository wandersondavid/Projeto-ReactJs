
const mongoose = require('mongoose');

const UserShema = new mongoose.Schema({
    email: { 
       type: String}, 
})

module.exports = mongoose.model('User', UserShema);