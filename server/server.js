const cors = require('cors')

const express = require('express')
const app = express()
const dbConnect = require('./dbConnect')
app.use(express.json())
const port = 5000
const userRoute = require('./routes/userRoute.js')

app.use('/api/user/', userRoute)

app.use(cors({
    origin: [
        "http://localhost:3000",
        "https://cv-builder-8t9d.vercel.app"
    ],
    credentials: true,
    
}))


app.get('/', (req,res) => res.send('Hello World!'))
// app.listen(port, () => console.log(`Example app listening on port ${port}`))

module.exports = app