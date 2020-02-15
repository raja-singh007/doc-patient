const router2 = require('express').Router();
const HospitalData = require('../model/hospital');

//get all the data
router2.get('/',async(req,res,next) =>{
    try{
    const hospdatas = await HospitalData.find();
    res.json(hospdatas);
    }catch(err){
        res.json({message:err})
    }
});

//post data hospital

router2.post('/', async(req,res)=>{
    const hospdata = new HospitalData({
        name : req.body.name,
        doctors : req.body.doctors
    });
    try{
        const savedHosp = await hospdata.save();
        res.json(savedHosp);
    } catch(err){res.json({message: err})}

});

//get specific data
router2.get('/:hospID', async(req,res)=>{
    try{
     const hospData = await HospitalData.findById(req.params.hospID);
    res.json(hospData)
 }catch(err){res.json({message:err})}
 });

 //DELETE data
router2.delete('/:hospID', async(req,res) =>{
    try{
        const removedData = await PatientData.remove({ _id: req.params.hospID});
        res.json(removedData);
    }catch(err){ res.json({message: err})  }
});

//UPDATE data

router2.patch('/:hospID', async(req,res) =>{
    try{
        const updatedData = await PatientData.updateOne(
            {_id: req.params.hospID},
            { $set :{doctors:req.body.doctors}});
        res.json(updatedData);
    }catch(err){ res.json({message: err})  }
});



module.exports = router2;