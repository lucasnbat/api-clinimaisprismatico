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

const router = Router();

// rotas usuários

router.post('/usuarios', new CreateUserController().handle);
router.post('/usuarios/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle);
router.get('/usuarios', isAuthenticated, new ListUsersController().handle);
router.delete('/usuarios/:usuario_id', isAuthenticated, new DeleteUserController().handle)
router.get('/usuarios/:usuario_id', isAuthenticated, new ListUserByIdController().handle)
router.put('/usuarios/:usuario_id', isAuthenticated, new ToggleUserActiveStatusController().handle)
router.put('/usuarios/newPassword/:usuario_id', isAuthenticated, new SetNewPasswordController().handle)

// rotas pacientes

router.get('/pacientes', isAuthenticated, new ListPacientsController().handle)


export { router }