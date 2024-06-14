import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { AuthUserController } from "./controllers/AuthUserController";

const router = Router();

router.post('/usuarios', new CreateUserController().handle);
router.post('/usuarios/session', new AuthUserController().handle)

export { router }