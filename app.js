const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json())

//bringing in my goons(routers)
const routers = require('./routes/ChurchJSRoute')


app.use('/api', routers)

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

