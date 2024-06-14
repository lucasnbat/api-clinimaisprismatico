import { Request, Response } from "express";
import { CreatePacientService } from "../../services/paciente/CreatePacientService";

class CreatePacientController {
    async handle(req: Request, res: Response) {
        const createPacientService = new CreatePacientService();

        const { cpf,
            nome_completo,
            data_nascimento,
            endereco,
            celular,
            contato_adicional,
            convenio_id,
            email,
            cns,
            numero_carteira,
        } = req.body;

        const paciente = await createPacientService.execute(
            {
                cpf,
                nome_completo,
                data_nascimento,
                endereco,
                celular,
                contato_adicional,
                convenio_id,
                email,
                cns,
                numero_carteira,
            }
        );

        return paciente;
    }
}

export { CreatePacientController }