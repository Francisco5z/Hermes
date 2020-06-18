const routes = require('express').Router();
const AuthMiddleware = require('./middlewares/auth');

const UserControllers = require('./controllers/UserControllers');
const AuthController = require('./controllers/AuthenticationController');
const RoomControllers = require('./controllers/Room/RoomsControllers');
const RoomSessionController = require('./controllers/Room/RoomSessionController');
const RoomAccessController = require('./controllers/Room/RoomAccessController')
const WarningsControlers =  require('./controllers/WarningsControllers');

routes.get('/ok', AuthMiddleware, (req , res) => {
  return res.json({userId: req.app.locals['userId']});
});

routes.post('/user', UserControllers.create);
routes.get('/users', AuthMiddleware, UserControllers.index);
routes.delete('/users/:id', AuthMiddleware, UserControllers.delete);

routes.post('/auth', AuthController.authentication);

routes.get('/room', RoomControllers.index);
routes.get('/room/:room_id', AuthMiddleware, RoomControllers.show)
routes.post('/room/:userId', AuthMiddleware, RoomControllers.create);
routes.delete('/room/:room_id', RoomControllers.delete);

routes.post('/room/auth/:userId', AuthMiddleware,RoomSessionController.authentication);

routes.get('/room_access', RoomAccessController.index);
routes.delete('/room_access/:id', AuthMiddleware,RoomAccessController.delete)
routes.get('/can_access/:userId', AuthMiddleware, RoomAccessController.show);

routes.get('/warnings', AuthMiddleware, WarningsControlers.index)
routes.get('/room/warnings/:room_id', AuthMiddleware, WarningsControlers.show);
routes.post('/warnings/:userId', AuthMiddleware, WarningsControlers.create);
routes.put('/edit/warnings', AuthMiddleware, WarningsControlers.update);
routes.delete('/warnings/:id', AuthMiddleware, WarningsControlers.delete);

module.exports = routes;