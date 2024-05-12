const express=require('express');
const morgan=require('morgan');//sirven para agregar las metricas o registros
const studentRouter=require('./routes/student.router')
const teacherRouter=require('./routes/teacher.router')
const app=express();
//Setttings configuraciones del servidor (aplicaciones)
app.set('PORT',process.env.PORT || 3000);
app.set('view engine', 'ejs'); //indicar que pude responder un html completo
//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));//false: indicar que solo se analizaran datos simples y no datos completos
app.use(morgan('dev'));
app.use('/api/students',studentRouter);
app.use('/api/teachers',teacherRouter);

module.exports=app; //para que quede disponible y usdado desde otros archivos

