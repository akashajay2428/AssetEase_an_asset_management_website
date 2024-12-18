import express from 'express'
import { addMed,listMed,removemed } from '../controllers/medcontroller.js';
import multer from 'multer';

const medRouter=express.Router();

//Image storage engine

const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
});

const upload=multer({storage:storage})

medRouter.post('/add',upload.single('image'),addMed);
medRouter.get('/list',listMed)
medRouter.delete('/remove',removemed);

export default medRouter;