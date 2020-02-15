const router = require('express').Router();
const DoctorData = require('../model/doctor');

// router.get('/:name',async(req,res,next) =>{
//     const name = await req.params.name;
//     console.log(name);
//     res.send('doctorName');

// });


//get all the data
router.get('/',async(req,res,next) =>{
    try{
    const docdatas = await DoctorData.find();
    res.json(docdatas);
    }catch(err){
        res.json({message:err})
    }
});

//post data
router.post('/',async(req,res)=>{
    //console.log(req.body);
    const doctorData = new DoctorData({
        name:req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        specilization : req.body.specilization,
        hospital : req.body.hospital
    });
    try{
    const savedDoc = await doctorData.save()
    res.json(savedDoc);
    }catch(err){
        res.json({message : err});
    }

});

//get specific data
    router.get('/:docID', async(req,res)=>{
       try{
        const docData = await DoctorData.findById(req.params.docID);
       res.json(docData)
    }catch(err){res.json({message:err})}
    });

//DELETE data
router.delete('/:docID', async(req,res) =>{
    try{
        const removedData = await DoctorData.remove({ _id: req.params.docID});
        res.json(removedData);
    }catch(err){ res.json({message: err})  }
});

//UPDATE data

router.patch('/:docID', async(req,res) =>{
    try{
        const updatedData = await DoctorData.updateOne(
            {_id: req.params.docID},
            { $set :{name:req.body.name}});
        res.json(updatedData);
    }catch(err){ res.json({message: err})  }
});



module.exports = router;