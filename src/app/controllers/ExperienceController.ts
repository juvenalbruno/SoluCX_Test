import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Experience from '../models/Experience';

class ExperienceController {
    async index(req: Request, res: Response) {
        const repository = getRepository(Experience);

        const exp = await repository.find();

        return res.json(exp);
    };

    async create(req: Request, res: Response) {
        const repository = getRepository(Experience);

        const { id_client, loja, colaborador, date, valor } = req.body;

        if(!id_client || typeof id_client == undefined || id_client == null ){
            return res.send('Erro no campo "id_client"');
        };
        if(!loja || typeof loja == undefined || loja == null ){
            return res.send('Erro no campo "loja"');
        };
        if(!colaborador || typeof colaborador == undefined || colaborador == null ){
            return res.send('Erro no campo "colaborador"');
        };
        if(!date || typeof date == undefined || date == null ){
            return res.send('Erro no campo "date"');
        };
        if(!valor || typeof valor == undefined || valor == null ){
            return res.send('Erro no campo "valor"');
        };

        const exp = repository.create({ id_client, loja, colaborador, date, valor});

        await repository.save(exp);

        return res.json(exp);
    };

    async update(req: Request, res: Response) {
        const repository = getRepository(Experience);

        const { id, loja, colaborador, date, valor } = req.body;

        const expExists = await repository.findOne({ where: { id }});

        if(!expExists){
            return res.sendStatus(404);
        }

        const exx = await repository.update(id, { loja, colaborador, date, valor });

        return res.sendStatus(200);
    };
}

export default new ExperienceController();