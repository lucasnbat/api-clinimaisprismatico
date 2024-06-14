import { Request, Response } from "express";
import { CreateDoctorService } from "../../services/medico/CreateDoctorService";

class CreateDoctorController {
    async handle(req: Request, res: Response) {
        const {
            codigo,
            cpf,
            nome,
            crm,
            conselho,
            uf_conselho,
            especialidade,
            email,
            telefone,
            contato_adicional,
            ativo,
        } = req.body;

        const createDoctorService = new CreateDoctorService();
        const medico = await createDoctorService.execute({
            codigo,
            cpf,
            nome,
            crm,
            conselho,
            uf_conselho,
            especialidade,
            email,
            telefone,
            contato_adicional,
            ativo,
        });

        return res.json(medico);
    }
}

export { CreateDoctorController }