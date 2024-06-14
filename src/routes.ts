import { Router } from "express";
import { CreateUserController } from "./controllers/usuarios/CreateUserController";
import { AuthUserController } from "./controllers/usuarios/AuthUserController";
import { DetailUserController } from "./controllers/usuarios/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { ListUsersController } from "./controllers/usuarios/ListUsersController";

const router = Router();

router.post('/usuarios', new CreateUserController().handle);
router.post('/usuarios/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle);
router.get('/usuarios', isAuthenticated, new ListUsersController().handle);

export { router }