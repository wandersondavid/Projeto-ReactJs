const express = require('express')
const mongoose = require('mongoose')
const  cors = require('cors')
const path = require('path');
const routes = require('./routes')
<<<<<<< HEAD
const app = express();

=======


// mongoose.connect('mongodb+srv://wanderson:ohf945@wanderson-ky980.mongodb.net/admin?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }) 
>>>>>>> login

// mongoose.connect('mongodb+srv://wanderson:92135130@wanderson-ky980.mongodb.net/test?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }) 

// mongoose.connect('mongodb+srv://wanderson:wanderson@omnistack-hixif.mongodb.net/test?retryWrites=true&w=majority',{
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
// })

mongoose.connect('mongodb+srv://thander:thander@cluster0-q3xmq.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors)
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..', 'uploads')));
app.use(routes);

app.listen(3333) 