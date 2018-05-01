var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var ImageEtSonsSchema = new Schema({
  image: {
        type: String,
        unique: true,
        required: true
    },
  son: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ImageEtSons', ImageEtSonsSchema);
