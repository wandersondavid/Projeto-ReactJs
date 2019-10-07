const mongoose = require('mongoose')

const BookingShema = new mongoose.Schema({
    date:String,
    approved: Boolean,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:    'User'
    },
    Spot:{
        type: mongoose.Schema.Types.ObjectId,
        ref:    'Spot'
    }
})

module.exports = mongoose.model('Booking', BookingShema)