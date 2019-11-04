const express = require('express')
const mongoose = require('mongoose')
const  cors = require('cors')
const path = require('path');
const routes = require('./routes')

const app = express();  
 
mongoose.connect('mongodb+srv://wanderson:wanderson@omnistack-hixif.mongodb.net/test?retryWrites=true&w=majority',{
   useNewUrlParser: true,
   useUnifiedTopology: true,
})


app.use(express.json());
app.use(routes);
app.use(cors)
//  app.get('/', (req, res)=> {
//     return res.json({msg: "TESTE"})
//  })

app.listen(3333)