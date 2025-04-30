const cors = require('cors')

const express = require('express')
const app = express()
const dbConnect = require('./dbConnect')

const port = 5000
const userRoute = require('./routes/userRoute.js')
app.use(express.json())



app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use('/user/', userRoute)





app.get('/', (req,res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}`))

// module.exports = app