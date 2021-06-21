import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

class UseController {
    async index(req: Request, res: Response) {
        const repository = getRepository(User);

        const users = await repository.find();

        if(!users){
            return res.send([""]);
        }

        return res.json(users);
    };

    async create(req: Request, res: Response) {
        const repository = getRepository(User);
        
        const { name, email, tel, cpf  } = req.body;

        if(!name || typeof name == undefined || name == null ){
            return res.send('Erro no campo "name"');
        };
        if(!email || typeof email == undefined || email == null ){
            return res.send('Erro no campo "email"');
        };
        if(!tel || typeof tel == undefined || tel == null ){
            return res.send('Erro no campo "tel"');
        };
        if(!cpf || typeof cpf == undefined || cpf == null ){
            return res.send('Erro no campo "cpf"');
        };

        const userExists = await repository.findOne({ where: { cpf } });
        if(userExists){

            return res.sendStatus(400);
        }
        const user = repository.create({ name, email, tel, cpf });
        await repository.save(user);

        return res.json(user);
    };

    async delete(req: Request, res: Response) {
        const repository = getRepository(User);

        const { id } = req.body;

        const user = await repository.findOne({ where: { id }});

        if(!user) {
            return res.sendStatus(404);
        }

        await repository.remove(user);

        return res.sendStatus(200);
    };

    async update(req: Request, res: Response) {
        const repository = getRepository(User);

        const { id, email, tel, } = req.body;

        const userExists = await repository.findOne({ where: { id }});

        if(!userExists) {
            return res.sendStatus(404);
        }

        const user = await repository.update(id, { email, tel });

        return res.sendStatus(200);

    };
}

export default new UseController();