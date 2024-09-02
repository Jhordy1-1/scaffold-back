// Importar Router de Express
import {Router} from 'express'
const router = Router()
// Importar los métodos del controlador 
import {
    crearMatricula,
    verMatriculas,
    verMatricula,
    eliminarMatricula,
    editarMatricula,
} from "../T_controllers/matricula_controller.js"

import verificarAutenticacion from "../T_middlewares/autenticacion.js";

import { validarMatricula, manejarErrores} from '../T_middlewares/validacionForms.js';


// Rutas publicas
router.get("/matriculas",verificarAutenticacion, verMatriculas);
router.get("/matricula/:id",verificarAutenticacion, verMatricula);
router.post("/matricula", verificarAutenticacion, validarMatricula,manejarErrores , crearMatricula);
router.delete("/matricula/:id", verificarAutenticacion, eliminarMatricula);
router.put("/matricula", verificarAutenticacion, editarMatricula);


// Exportar la variable router
export default router




