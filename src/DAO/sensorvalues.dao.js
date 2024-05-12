const sensorvalues=require('../models/sensorvalues.model');
const sensorvaluesDAO={}
studentDAO.getAll=async()=>{
    const sensorvalues=sensorvalues.find();
    return sensorvalues;
}
studentDAO.getOne=async(dni)=>{
    const sensorvalues=sensorvalues.findOne({dni:dni})
    return student;
}
studentDAO.insertOne=async(sensorvalues)=>{
    const sensorvaluesSaved=new sensorvalues(sensorvalues);
    await sensorvaluesSaved.save();
    return "student saved";
}
studentDAO.updateOne=async(dni,sensorvalues)=>{
    const result= await sensorvalues.updateOne({dni:dni},sensorvalues);
    return "student updated";

}
sensorvaluesDAO.deleteOne=async(dni)=>{
    await Student.deleteOne({dni:dni});
    return "student eliminado";
}
module.exports=studentDAO;