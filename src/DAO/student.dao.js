const Student=require('../models/student.model');
const studentDAO={}
studentDAO.getAll=async()=>{
    const students=Student.find();
    return students;
}
studentDAO.getOne=async(dni)=>{
    const student=Student.findOne({dni:dni})
    return student;
}
studentDAO.insertOne=async(student)=>{
    const studentSaved=new Student(student);
    await studentSaved.save();
    return "student saved";
}
studentDAO.updateOne=async(dni,student)=>{
    const result= await Student.updateOne({dni:dni},student);
    return "student updated";

}
studentDAO.deleteOne=async(dni)=>{
    await Student.deleteOne({dni:dni});
    return "student eliminado";
}
module.exports=studentDAO;