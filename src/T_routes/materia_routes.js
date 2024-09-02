// Importar Router de Express
import {Router} from 'express'
const router = Router()
// Importar los métodos del controlador 
import {
    crearMateria,
    verMateria,
    verMaterias,
    eliminarMateria,
    editarMateria
} from "../T_controllers/materia_cotroller.js"

import verificarAutenticacion from "../T_middlewares/autenticacion.js";

import { validarMateria,manejarErrores } from '../T_middlewares/validacionForms.js';



router.get("/materias",verificarAutenticacion, verMaterias);
router.get("/materia/:id",verificarAutenticacion, verMateria);
router.post("/materia", verificarAutenticacion, validarMateria,manejarErrores , crearMateria);
router.delete("/materia/:id", verificarAutenticacion, eliminarMateria);
router.put("/materia", verificarAutenticacion, editarMateria);


// Exportar la variable router
export default router




