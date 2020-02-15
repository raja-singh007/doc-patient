const mongoose = require('mongoose');

const docSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        min: 6,
        max:255
    },
    email: {
        type: String,
        required: true,
        max:255,
        min:6
    },
    phone:{
        type: String,
        min:10,
        max:12
    },
    specilization :{
        required:true,
        type:String,
        max: 500
    },
    hospital :{
        type:String,
        required:true,
        max: 50
    },
    timeSlotes :{
        required:true,
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Doctor',docSchema);