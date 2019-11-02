<<<<<<< HEAD
const mongoose = require('mongoose');
=======
const mongoose = require('mongoose')
>>>>>>> login

const UserShema = new mongoose.Schema({
    email: {
       type: String},
})

module.exports = mongoose.model('User', UserShema);