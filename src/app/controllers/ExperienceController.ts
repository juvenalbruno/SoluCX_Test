import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

class UseController {
    index(req: Request, res: Response) {}
    create(req: Request, res: Response) {}
    update(req: Request, res: Response) {}
}

export default new UseController();