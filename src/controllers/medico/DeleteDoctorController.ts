import { Request, Response } from "express";
import { DeleteDoctorService } from "../../services/medico/DeleteDoctorService";

class DeleteDoctorController {
    async handle(req: Request, res: Response){
        const {medico_id} = req.params;

        const medico_id_number = Number(medico_id);

        const deleteDoctorService = new DeleteDoctorService();

        const medico = await deleteDoctorService.execute(medico_id_number);

        return res.json(medico);
    }
}

export { DeleteDoctorController }