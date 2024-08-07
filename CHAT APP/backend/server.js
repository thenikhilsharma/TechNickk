import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

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

app.use(express.json())
app.use(cookieParser()) // middle ware

app.get('/', (req, res) => {
    console.log('sever has started...');
})

// importing routes
import authRouters from './routes/auth.routes.js'

app.use('/api/auth', authRouters);

app.listen(3000, () => {
    console.log('server log...' + PORT);
})