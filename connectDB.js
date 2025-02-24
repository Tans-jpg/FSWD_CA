const mongoose = require('mongoose');

const connectDB = async() => {
    await mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log('Connected to Database'))
.catch((err)=>console.log('Error connecting to Database',err))
}

module.exports = connectDB;