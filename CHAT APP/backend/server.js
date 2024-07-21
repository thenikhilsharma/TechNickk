import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('database connected...');
    })
    .catch((error) =>{
        console.log('Error in connecting databse' + error);
    })

const app = express();

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log('sever has started...');
})

app.listen(3000, () => {
    console.log('server log...' + PORT);
})