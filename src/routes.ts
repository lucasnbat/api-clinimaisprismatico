import { Router } from "express";
import { CreateUserController } from "./controllers/usuarios/CreateUserController";
import { AuthUserController } from "./controllers/usuarios/AuthUserController";
import { DetailUserController } from "./controllers/usuarios/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { ListUsersController } from "./controllers/usuarios/ListUsersController";
import { DeleteUserController } from "./controllers/usuarios/DeleteUserController";
import { ListUserByIdController } from "./controllers/usuarios/ListUserByIdController";
import { ToggleUserActiveStatusController } from "./controllers/usuarios/ToggleUserActiveStatusController";
import { SetNewPasswordController } from "./controllers/usuarios/SetNewPasswordController";
import { ListPacientsController } from "./controllers/paciente/ListPacientsController";
import { CreatePacientController } from "./controllers/paciente/CreatePacientController";
import { CreateConvenioController } from "./controllers/convenio/CreateConvenioController";
import { DeletePacientController } from "./controllers/paciente/DeletePacientController";
import { UpdatePacientController } from "./controllers/paciente/UpdatePacientController";
import { ListPacientByIdController } from "./controllers/paciente/ListPacientByIdController";
import { ListConveniosController } from "./controllers/convenio/ListConveniosController";
import { ListConvenioByIdController } from "./controllers/convenio/ListConvenioByIdController";
import { DeleteConvenioController } from "./controllers/convenio/DeleteConvenioController";
import { UpdateConvenioController } from "./controllers/convenio/UpdateConvenioController";
import { CreateDoctorController } from "./controllers/medico/CreateDoctorController";
import { ListDoctorsController } from "./controllers/medico/ListDoctorsController";
import { ListDoctorByIdController } from "./controllers/medico/ListDoctorByIdController";
import { DeleteDoctorController } from "./controllers/medico/DeleteDoctorController";
import { UpdateDoctorController } from "./controllers/medico/UpdateDoctorController";
import { CreateConsultaController } from "./controllers/consulta/CreateConsultaController";
import { ListConsultaByIdController } from "./controllers/consulta/ListConsultaByIdController";
import { UpdateConsultaController } from "./controllers/consulta/UpdateConsultaController";
import { DeleteConsultaController } from "./controllers/consulta/DeleteConsultaController";
import { ToggleConsultaStatusController } from "./controllers/consulta/ToggleConsultaStatusController";
import { ListAllConsultasController } from "./controllers/consulta/ListAllConsultasController";
import { ListConsultasByMedicoAndDateAndTimeController } from "./controllers/consulta/ListConsultasByMedicoAndDateAndTimeController";
import { TotalMedicosController } from "./controllers/totalizadores/TotalMedicosController";
import { TotalPacientesController } from "./controllers/totalizadores/TotalPacientesController";
import { TotalConsultasCanceladasController } from "./controllers/totalizadores/TotalConsultasCanceladasController";
import { TotalConsultasHojeController } from "./controllers/totalizadores/TotalConsultasHojeController";
import { LogoutUserController } from "./controllers/usuarios/LogoutUserController";
import { UpdateUserController } from "./controllers/usuarios/UpdateUserController";

const router = Router();

// rotas usuários

router.post('/usuarios', new CreateUserController().handle);
router.post('/usuarios/session', new AuthUserController().handle);
router.post('/usuarios/logout', isAuthenticated, new LogoutUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);
router.get('/usuarios', isAuthenticated, new ListUsersController().handle);
router.post('/usuarios/autenticado', isAuthenticated, new CreateUserController().handle);
router.put('/usuarios/:usuario_id', isAuthenticated, new UpdateUserController().handle);
router.delete('/usuarios/:usuario_id', isAuthenticated, new DeleteUserController().handle);
router.get('/usuarios/:usuario_id', isAuthenticated, new ListUserByIdController().handle);
router.put('/usuarios/:usuario_id/toggle', isAuthenticated, new ToggleUserActiveStatusController().handle);
router.put('/usuarios/newPassword/:usuario_id', isAuthenticated, new SetNewPasswordController().handle);

// rotas pacientes

router.get('/pacientes', isAuthenticated, new ListPacientsController().handle);
router.post('/pacientes', isAuthenticated, new CreatePacientController().handle);
router.delete('/pacientes/:paciente_id', isAuthenticated, new DeletePacientController().handle);
router.put('/pacientes/:paciente_id', isAuthenticated, new UpdatePacientController().handle);
router.get('/pacientes/:paciente_id', isAuthenticated, new ListPacientByIdController().handle);

// rotas convenio

router.post('/convenio', isAuthenticated, new CreateConvenioController().handle);
router.get('/convenio', isAuthenticated, new ListConveniosController().handle);
router.get('/convenio/:convenio_id', isAuthenticated, new ListConvenioByIdController().handle);
router.delete('/convenio/:convenio_id', isAuthenticated, new DeleteConvenioController().handle);
router.put('/convenio/:convenio_id', isAuthenticated, new UpdateConvenioController().handle);

// rotas medico

router.post('/medico', isAuthenticated, new CreateDoctorController().handle);
router.get('/medico', isAuthenticated, new ListDoctorsController().handle);
router.get('/medico/:medico_id', isAuthenticated, new ListDoctorByIdController().handle);
router.delete('/medico/:medico_id', isAuthenticated, new DeleteDoctorController().handle);
router.put('/medico/:medico_id', isAuthenticated, new UpdateDoctorController().handle);

// rotas consulta

router.post('/consulta', isAuthenticated, new CreateConsultaController().handle);
router.get('/consulta/:consulta_id', isAuthenticated, new ListConsultaByIdController().handle);
router.put('/consulta/:consulta_id', isAuthenticated, new UpdateConsultaController().handle);
router.delete('/consulta/:consulta_id', isAuthenticated, new DeleteConsultaController().handle);
router.put('/consulta/toggleConsulta/:consulta_id', isAuthenticated, new ToggleConsultaStatusController().handle);
router.post('/consultas_search', isAuthenticated, new ListAllConsultasController().handle);
router.post('/consulta/medico/dia', isAuthenticated, new ListConsultasByMedicoAndDateAndTimeController().handle);

// rotas totalizadores
router.get('/totalizadores/medicos', isAuthenticated, new TotalMedicosController().handle);
router.get('/totalizadores/pacientes', isAuthenticated, new TotalPacientesController().handle);
router.get('/totalizadores/consultas/canceladas', isAuthenticated, new TotalConsultasCanceladasController().handle);
router.get('/totalizadores/consultas/hoje', isAuthenticated, new TotalConsultasHojeController().handle);


export { router }