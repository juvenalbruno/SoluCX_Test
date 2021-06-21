import { Router } from 'express';
import UserController from './app/controllers/UserController';

const router = Router();

router
    .get('/users', UserController.index)
    .post('/users', UserController.create)
    .delete('/users', UserController.delete)
    .put('/users', UserController.update)

export default router;