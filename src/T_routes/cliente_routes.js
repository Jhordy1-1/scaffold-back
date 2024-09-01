// Importar Router de Express
import {Router} from 'express'
const router = Router()
// Importar los métodos del controlador 
import {
    crearCliente,
    verClientes,
    eliminarCliente,
    editarCliente
} from "../T_controllers/cliente_controller.js"

import verificarAutenticacion from "../T_middlewares/autenticacion.js";

import { validarCliente,manejarErrores } from '../T_middlewares/validacionForms.js';


// Rutas publicas
router.get("/clientes",verificarAutenticacion, verClientes);
router.post("/clientes", verificarAutenticacion, validarCliente,manejarErrores , crearCliente);
router.delete("/clientes", verificarAutenticacion, eliminarCliente);
router.put("/clientes", verificarAutenticacion, editarCliente);


// Exportar la variable router
export default router




