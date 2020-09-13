const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.get('/', (req, res)=>{
   res.send('Testing Testing!!!! Server up and ready');
});

const mongoURL = process.env.MONGO_LOCAL_URL

mongoose
    .connect(mongoURL,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
    .then(()=> console.log('Database is live and running'))
    .catch((err)=> console.log(err))

app.listen(process.env.PORT_NUMBER, ()=>{
    console.log('app is listening on 8080');
});

