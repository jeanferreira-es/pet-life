const { Router } = require('express');
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const PetController = require('./controllers/PetController');

const routes = Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.show);
routes.patch('/users', UserController.Update);
routes.delete('/users', UserController.delete);

routes.post('/pets', PetController.store);
routes.get('/pets', PetController.show);
routes.delete('/pets', PetController.delete);

routes.get('/sessions', SessionController.show);

module.exports = routes;