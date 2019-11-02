const express = require('express');
const SessionCrontrolle = require('./controllers/SessionControlle');
const multer = require('multer')
const uploadConfig= require('./config/upload')
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardControlle');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionCrontrolle.store);

routes.get('/spots',SpotController.index);
<<<<<<< HEAD
routes.get('/', SpotController.test);


routes.post('/spots', upload.single('thumbnail'),SpotController.store);
routes.get('/dashboard',DashboardController.show);

=======
routes.post('/spots', upload.single('thumbnail'),SpotController.store);
routes.get('/dashboard',DashboardController.show);

>>>>>>> login
routes.post('spots/:spot_id/bookings', BookingController.store) ;

module.exports = routes;