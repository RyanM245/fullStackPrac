require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const ctrl = require('./ctrl')


const {SERVER_PORT, CONNECTION_STRING} = process.env

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false}
}).then((dbInstance)=>{
    app.set('db',dbInstance)
}).catch((err)=> console.log(err))

app.use(express.json())

app.post('/api/movies', ctrl.create)
app.get('/api/movies', ctrl.getAll)
app.get('/api/movies/:id', ctrl.getOne)
app.put('/api/movies/:id', ctrl.update)
app.delete('/api/movies/:id', ctrl.delete)


app.listen(SERVER_PORT, () => {
    console.log(`${SERVER_PORT} I am your father!`)
})
