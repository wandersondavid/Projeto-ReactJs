const express = require('express');
const SessionCrontrolle = require('./controllers/SessionControlle')

const routes = express.Router();


routes.post('/sessions', SessionCrontrolle.store)
   

module.exports = routes