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


app.listen(process.env.PORT || PORT, () => {
    console.log(`server is running on port `)
})