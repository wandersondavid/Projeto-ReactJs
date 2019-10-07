const moogose = require('mongoose');

mongoose.connect('mongodb://localhost/mongoreact',{ useMongoClient: true});
mongoose.Promise =global.Promise;

module.exports = moogose;