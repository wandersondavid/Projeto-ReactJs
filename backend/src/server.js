const express = require('express')
const mongoose = require('mongoose')
const app = express();
const routes = require('./routes')


// mongoose.connect('mongodb+srv://wanderson:ohf945@wanderson-ky980.mongodb.net/admin?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }) 


app.use(express.json());
app.use(routes);

app.listen(3333) 