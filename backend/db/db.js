import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {MongoClient} from 'mongodb';

dotenv.config();
// console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL);

let client = new MongoClient(process.env.MONGO_URL);

async function dbConnect(){
    await client.connect();
}

let db = client.db('tanjiroRui');

async function getData(colName,query){
    let output = [];
    try{
        const cursor = db.collection(colName).find(query);
        for await(const data of cursor){
            output.push(data)
        }
        cursor.closed
    }catch(err){
        output.push({"Error":"Error in getting data"})
    }
    return output
}

async function postData(colName,data){
    let output;
    try{
        output = await db.collection(colName).insertOne(data);
    }catch(err){
        output = {"response":"Error in post data"}
    }
    return output
}

async function updateData(colName,condition,data){
    let output;
    try{
        output = await db.collection(colName).updateOne(condition,data);
    }catch(err){
        output = {"response":"Error in post data"}
    }
}
  
export{
    dbConnect,
    getData,
    postData
    // ascendRating
    // sortData
}