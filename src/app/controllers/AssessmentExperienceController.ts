import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Assessment from "../models/AssessmentExperience";


class AssessmentExperienceController {
    async index(req: Request, res: Response) {
        const repository = getRepository(Assessment);

        const ass = await repository.find();

        return res.json(ass);
    };

    async create(req: Request, res: Response) {
        const repository = getRepository(Assessment);

        const { id_client, id_experience, note, comment } = req.body;

        const ass = repository.create({ id_client, id_experience, note, comment });

        await repository.save(ass);

        return res.json(ass);
    }
}

export default new AssessmentExperienceController();