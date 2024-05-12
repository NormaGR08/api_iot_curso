const teacherController = require('../controllers/teacher.controller');
const {Router}=require('express');
const router=Router();

router.get('/getAll',teacherController.getAll);
router.get('/getOne/:empleyenumber',teacherController.getOne);
router.post('/insertOne',teacherController.insertOne);
router.put('/updateOne/:empleyenumber',teacherController.updateOne);
router.delete('/deleteOne/:empleyenumber',teacherController.deleteOne)
module.exports=router;
