const express = require('express')
const mongoose = require('mongoose')
const app = express();
const routes = require('./routes')
// mongodb+srv://wanderson:<password>@cluster0-jf8fh.gcp.mongodb.net/admin?retryWrites=true&w=majority
// mongoose.connect('mongodb+srv://wanderson:ohf945Fla@cluster0-jf8fh.gcp.mongodb.net/wanderson?retryWrites=true&w=majority',{
    
    mongoose.connect('mongodb+srv://wanderson:ohf945@wanderson-ky980.mongodb.net/admin?retryWrites=true&w=majority',{    
useNewUrlParser: true,
    useUnifiedTopology:true,
})


app.use(express.json());
app.use(routes);

app.listen(3333)