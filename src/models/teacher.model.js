const {Schema,model}=require('mongoose');
const teacherSchema=new Schema({
    empleyenumber:{
        type:Number,
        require:true,
        unique:true
    },
    name:String,
    lastname:String,
    profession:String,
    area:String,
    salario:Number
},{
    versionKey:false,//cada que se inserta un nuevo documento de exprese se agrega un atributo no utilizado y se desactiva
    timestamps:true
});
module.exports=model('teacher',teacherSchema);