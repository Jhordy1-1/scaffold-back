// Importar Router de Express
import {Router} from 'express'
const router = Router()
// Importar los métodos del controlador 
import {
    login,
    registro,
} from "../T_controllers/usuario_controller.js"


import { validarUsuario,manejarErrores } from '../T_middlewares/validacionForms.js';


// Rutas publicas
router.post("/login", login);
router.post("/registro", validarUsuario, manejarErrores , registro);

// Exportar la variable router
export default router






