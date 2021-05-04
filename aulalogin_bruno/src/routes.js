import { request, Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer'
import UserController from './app/controllers/UserController';
import SessionControlller from './app/controllers/SessionController';
import FileControler from './app/controllers/FileControler';
import ProviderController from './app/controllers/ProviderController';

import authMiddleware from './app/middlewares/auth'

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionControlller.store);

routes.use(authMiddleware);

routes.put('/users',UserController.update);

routes.get('/providers', ProviderController.index);

routes.post('/files', upload.single('file'), FileControler.store);

export default routes;
