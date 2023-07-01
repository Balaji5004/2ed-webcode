const express = require('express')
const cors = require ('cors');
const { db } = require('./db/db');
const { readdirSync } = require('fs');
const { route } = require('./routes/transactions');
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

//middleware
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api/v1',require('./routes/' + route)))

app.get('/', (req,res) =>{
    res.send('Hellow World')
})


const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('Server created successfully:',PORT)
    }) 
}

server()