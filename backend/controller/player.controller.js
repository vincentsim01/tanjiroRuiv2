import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());


router.get('/', (req,res) =>{
    res.send('API Router Success')
})

router.get('/message', (req,res) =>{
    res.send('Contact Message received')
})

export {router};