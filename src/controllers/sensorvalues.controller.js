const studentDAO=require('../DAO/sensorvalues.dao');
const studentController={}
studentController.getAll=async(req,res)=>{
    studentDAO.getAll()
    .then(students=>{
        res.render('../src/views/index',{sensorvalues});
    })
    .catch(err=>{
        res.json({
            status:"request failed"
        })
    });
}
studentController.getOne=async(req,res)=>{
    studentDAO.getOne(req.params.dni)
    .then(student=>{
        if(student!=null){
            res.render('../src/views/edit',{sensorvalues});
        }else{
            res.json({
                status:"sensor values not found"
            })
        }
    })
    .catch(err=>{
        res.json({
            status:"request failed"
        })
});
}
studentController.insertOne=async(req,res)=>{
    studentDAO.insertOne(req.body)
    .then(result=>{
        
            res.redirect('/api/sensorvalues/getAll')
        
    })
    .catch(err=>{
        status:"request failed"
    });
}
studentController.updateOne=async(req, res)=>{
    studentDAO.updateOne(req.params.dni,req.body)
    .then(result=>{
        res.redirect('/api/sensorvalues/getAll')
    })
    .catch(err=>{
        status:"request failed"
    });
}
studentController.deleteOne=async(req,res)=>{
    studentDAO.deleteOne(req.params.dni)
    .then(result=>{
        res.redirect('/api/sensorvalues/getAll')
    })
    .catch(err=>{
        status:"request failed"
    });
}
module.exports=sensorvaluesController;