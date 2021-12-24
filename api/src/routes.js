const { Router } = require('express');
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const PetController = require('./controllers/PetController');
const BonusController = require('./controllers/BonusController');
const AppointmentController = require('./controllers/AppointmentController');

const routes = Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.show);
routes.patch('/users', UserController.Update);
routes.delete('/users', UserController.delete);

routes.post('/pets', PetController.store);
routes.get('/pets', PetController.show);
routes.delete('/pets', PetController.delete);

routes.post('/appointments', AppointmentController.store);
routes.get('/appointments', AppointmentController.show);
routes.get('/appointments/:userId', AppointmentController.index);
routes.patch('/appointments', AppointmentController.edit);

routes.post('/bonus', BonusController.store);
routes.get('/bonus', BonusController.show);

routes.get('/sessions', SessionController.show);

module.exports = routes;