import { Router } from 'express';
import ExperienceController from './app/controllers/ExperienceController';
import UserController from './app/controllers/UserController';

const router = Router();

router
    .get('/users', UserController.index)
    .post('/users', UserController.create)
    .delete('/users', UserController.delete)
    .put('/users', UserController.update)

router
    .get('/exp', ExperienceController.index)
    .post('/exp', ExperienceController.create)
    .put('/exp', ExperienceController.update)

export default router;