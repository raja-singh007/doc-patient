const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        max:26
    },
    doctors:{
        type:Array,
        required:true
    }
});

module.exports = mongoose.model('Hospital',hospitalSchema);