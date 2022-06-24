const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const PORT= 8000

//process.env  enviroment variable is gonna keep it secret and safe the connection link in mongodb
let db,
dbConnectionString = process.env.DB_STRING,
dbName = 'start-trek-api',
collection

MongoClient.connect(dbConnectionString)
.then(client => {
    console.log('connected to Database')
    db = client.db(dbName)
    collection = db.collection('alien-info')
})

app.set('view engine', 'ejs')

//it lets our app in heroku or whereever it lets to serve us some file in public when we call it
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
// help express parse our data in  json 
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || PORT, () => {
    console.log(`server is running on port `)
})