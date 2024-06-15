// id                 Int       @id @default(autoincrement())
// medico_id          Int
// paciente_id        Int
// data_consulta      DateTime
// horario            String
// outras_informacoes String
// is_cancelada       Boolean
// created_at         DateTime? @default(now())
// updated_at         DateTime? @default(now())

import prismaClient from "../../prisma";

interface ConsultaRequest {
    medico_id: number,
    paciente_id: number,
    data_consulta: Date,
    horario: string,
    outras_informacoes: string,
    is_cancelada?: boolean,
}

class CreateConsultaService {
    async execute({
        medico_id,
        paciente_id,
        data_consulta,
        horario,
        outras_informacoes,
    }: ConsultaRequest) {
        const consulta = await prismaClient.consultas.create({
            data: {
                medico_id: medico_id,
                paciente_id: paciente_id,
                data_consulta: data_consulta,
                horario: horario,
                outras_informacoes: outras_informacoes,
            }
        });

        return consulta;
    }
}

export { CreateConsultaService }