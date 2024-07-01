const mongoose = require('mongoose')

const URL = "YOUR MONGO URL/resume-builder"

mongoose.connect(URL)

const connection = mongoose.connection

connection.on('connected', ()=>{
    console.log("MongoDB connected")
})
connection.on('error' ,()=>{
    console.log(error.message)
})

