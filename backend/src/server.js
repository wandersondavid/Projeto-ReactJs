const express = require('express')
const mongoose = require('mongoose')
const  cors = require('cors')
const path = require('path');
const routes = require('./routes')
<<<<<<< HEAD
const app = express();

mongoose.connect('mongodb+srv://wanderson:wanderson@omnistack-hixif.mongodb.net/test?retryWrites=true&w=majority',{
   useNewUrlParser: true,
   useUnifiedTopology: true,
})

app.use(cors)
app.use(express.json());
app.use(routes);

app.listen(3333) 