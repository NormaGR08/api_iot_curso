const teacherDAO=require('../DAO/teacher.dao');
const teacherController={}
teacherController.getAll=async(req,res)=>{
    teacherDAO.getAll()
    .then(teachers=>{
        res.json(teachers);
    })
    .catch(err=>{
        console.log(err)
        res.json({
            status:"request failed"
        })
    });
}
teacherController.getOne=async(req,res)=>{
    teacherDAO.getOne(req.params.empleyenumber)
    .then(teacher=>{
        if(teacher!=null){
            res.json(teacher);
        }else{
            res.json({
                status:"teachers not found"
            })
        }
    })
    .catch(err=>{
        res.json({
            status:"request failed",
            message:err
        })
});
}
teacherController.insertOne=async(req,res)=>{
    teacherDAO.insertOne(req.body)
    .then(result=>{
        res.json({
            status:result
        })
    })
    .catch(err=>{
        res.json({
            status:"request failed",
            message:err
            })
    });
}
teacherController.updateOne=async(req, res)=>{
    teacherDAO.updateOne(req.params.empleyenumber,req.body)
    .then(result=>{
        res.json({
            status:result
        })
    })
    .catch(err=>{
        res.json({
            status:"request failed",
            message:err
            })
    });
}
teacherController.deleteOne=async(req,res)=>{
    teacherDAO.deleteOne(req.params.empleyenumber)
    .then(result=>{
        res.json({
            status:result
        })
    })
    .catch(err=>{
        res.json({
        status:"request failed",
        message:err
        })
    });
}
module.exports=teacherController;