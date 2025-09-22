import mongoose from 'mongoose';

let mongoUrl = process.env.MONGO_URL

mongoose.connect(`${mongoUrl}`);

const playerSchema = new mongoose.Schema({
    name: String,
    level: Number,
    webPassed :Number,
    webSlashed :Number

})

export const Player = mongoose.model('player', playerSchema)