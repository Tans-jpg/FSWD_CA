const express= require('express');
const dotenv = require('dotenv');
// dotenv.config();
const connectDB = require('./connectDB');
const workoutRoutes = require('./routes/workouts');

const app=express()
app.use(express.json())

dotenv.config();

app.get('/',(req,res)=>{
    return res.status(200).send("Welcome to the FITNESS TRACKER API")
})

app.use('/api/workouts', workoutRoutes);


const PORT = process.env.PORT;

app.listen(PORT,()=>{
    connectDB();
    console.log(`Listening on http://localhost:${PORT}`)
})
