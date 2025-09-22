import Express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import {router as playerRouter} from './controller/player.controller.js';
import { Player } from './schema/playerSchema.js';
dotenv.config();
import {dbConnect,getData,postData} from './db/db.js';
const PORT = 5000;
const app = Express();

app.use(cors(
    {
        origin: '*', // your React app
        credentials: true                // allow cookies
      }
));

app.use(Express.static('public'));

dbConnect();

app.use(cookieParser());
app.use(Express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use('/api', playerRouter);

app.get('/', (req,res) => {
    res.send('Hello Express Basic');
})

app.get('/player', async(req,res) =>{
    let query ={};
    let collection = "players";
    let output = await getData(collection,query);
    res.send(output);
})

app.post('/uploadplayer', async(req,res)=>{
    // const {name, level, webPassed, webSlashed} = req.body;
    const body = req.body;
    let collection = "players";
        // const playersignup = new Player({
        //     name: name,
        //     level: level,
        //     webPassed: webPassed,
        //     webSlashed: webSlashed

        // })
        // await playersignup.save();
        // res.status(200).json({status:'true', message:'Director created successfully'});
    let response = await postData(collection,body);
    res.send(response);
})

app.listen(PORT, () =>{
    dbConnect();
    console.log(`server is running at ${PORT}`);
})