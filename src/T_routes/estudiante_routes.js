// Importar Router de Express
import {Router} from 'express'
const router = Router()
// Importar los métodos del controlador 
import {
    crearEstudiante,
    verEstudiantes,
    eliminarEstudiante,
    editarEstudiante,
    verEstudiante
} from "../T_controllers/estudiante_controller.js"

import verificarAutenticacion from "../T_middlewares/autenticacion.js";

import { validarEstudiante,manejarErrores } from '../T_middlewares/validacionForms.js';


router.get("/estudiantes",verificarAutenticacion, verEstudiantes);
router.get("/estudiante/:id",verificarAutenticacion, verEstudiante);
router.post("/estudiante", verificarAutenticacion, validarEstudiante,manejarErrores , crearEstudiante);
router.delete("/estudiante/:id", verificarAutenticacion, eliminarEstudiante);
router.put("/estudiante", verificarAutenticacion, editarEstudiante);


// Exportar la variable router
export default router




