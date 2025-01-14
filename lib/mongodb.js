// lib/mongodb.js
const mongoose = require('mongoose');

const uri = 'mongodb+srv://ash112679:Password@cluster0.4lgjc.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0';

let isConnected = false;

const connect = async () => {
  if (isConnected) return;

  try { 
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 30000 }); 
        isConnected = true; 
        console.log('Successfully connected to MongoDB'); 
    } catch (error) { 
        console.error('Error connecting to MongoDB:', error); 
    }
};

connect().catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

module.exports = { mongoose, connect };
