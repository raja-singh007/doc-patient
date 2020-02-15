const router1 = require('express').Router();
const PatientData = require('../model/patient');

//get all the data
router1.get('/',async(req,res,next) =>{
    try{
    const patientDatas = await PatientData.find();
    res.json(patientDatas);
    }catch(err){
        res.json({message:err})
    }
});

//post data
router1.post('/',async(req,res)=>{
    //console.log(req.body);
    const patientData = new PatientData({
        name:req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        appointmentDate : req.body.appointmentDate
    });
    try{
    const savedPat = await patientData.save()
    res.json(savedPat);
    }catch(err){
        res.json({message : err});
    }
});

//get specific data
router1.get('/:patID', async(req,res)=>{
    try{
     const patData = await PatientData.findById(req.params.patID);
    res.json(patData)
 }catch(err){res.json({message:err})}
 });

 //DELETE data
router1.delete('/:patID', async(req,res) =>{
    try{
        const removedData = await PatientData.remove({ _id: req.params.patID});
        res.json(removedData);
    }catch(err){ res.json({message: err})  }
});

//UPDATE data

router1.patch('/:patID', async(req,res) =>{
    try{
        const updatedData = await PatientData.updateOne(
            {_id: req.params.patID},
            { $set :{name:req.body.name}});
        res.json(updatedData);
    }catch(err){ res.json({message: err})  }
});






module.exports = router1;