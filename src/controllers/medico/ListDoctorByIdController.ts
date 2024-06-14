import { Request, Response } from "express";
import { ListDoctorById } from "../../services/medico/ListDoctorByIdService";

class ListDoctorByIdController {
    async handle(req: Request, res: Response) {
        const { medico_id } = req.params

        const medico_id_number = Number(medico_id);

        const listDoctorByIdService = new ListDoctorById();

        const medicos = await listDoctorByIdService.execute(medico_id_number);

        return res.json(medicos);
    }
}

export { ListDoctorByIdController }