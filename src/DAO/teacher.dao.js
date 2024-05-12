const Teacher=require('../models/teacher.model');
const teacherDAO={}
teacherDAO.getAll=async()=>{
    const teachers=Teacher.find();//capa que se encarga de comunicarse con mongo db (usar paginacion cuando de consulte todos los documentos = resgistros)
    return teachers;
}
teacherDAO.getOne=async(empleyenumber)=>{
    const teacher=await Teacher.findOne({empleyenumber:empleyenumber})
    return teacher;
}
teacherDAO.insertOne=async(teacher)=>{
    const teacherSaved=new Teacher(teacher);//creacion de la instancia
    await teacherSaved.save();
    return "tacher registred";
}
teacherDAO.updateOne=async(empleyenumber,teacher)=>{
    await Teacher.updateOne({empleyenumber:empleyenumber},teacher);
    return "teacher updated";

}
teacherDAO.deleteOne=async(empleyenumber)=>{
    await Teacher.deleteOne({empleyenumber:empleyenumber});
    return "teacher eliminado";
}
module.exports=teacherDAO;