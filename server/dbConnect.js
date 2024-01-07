const mongoose = require('mongoose')

const URL = "mongodb+srv://amanjotsingh0908:aman0908@amanjot0908.nen3ytm.mongodb.net/resume-builder"

mongoose.connect(URL)

const connection = mongoose.connection

connection.on('connected', ()=>{
    console.log("MongoDB connected")
})
connection.on('error' ,()=>{
    console.log(error.message)
})

