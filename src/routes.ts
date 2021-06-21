import { Router } from 'express';
import AssessmentExperienceController from './app/controllers/AssessmentExperienceController';
import ExperienceController from './app/controllers/ExperienceController';
import UserController from './app/controllers/UserController';

const router = Router();

router
    .get('/users', UserController.index)
    .post('/users', UserController.create)
    .delete('/users', UserController.delete)
    .put('/users', UserController.update)

router
    .get('/experience', ExperienceController.index)
    .post('/experience', ExperienceController.create)
    .put('/experience', ExperienceController.update)

router
    .get('/assessment', AssessmentExperienceController.index)
    .post('/assessment', AssessmentExperienceController.create)

export default router;