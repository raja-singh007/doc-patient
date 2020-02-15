const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maz:26
    },
    email: {
        type: String,
        required: false,
        max:255,
        min:6
    },
    phone:{
        type: String,
        required:true,
        min:10,
        max:11
    },
    appointmentDate:{
        type:Date,
        required:true,
        default: Date.now
    }
});

module.exports = mongoose.model('Patient',patientSchema);