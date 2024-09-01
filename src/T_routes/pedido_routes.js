// Importar Router de Express
import {Router} from 'express'
const router = Router()
// Importar los métodos del controlador 
import {
    crearPedido,
    verPedidos,
    eliminarPedido,
    editarPedido,
} from "../T_controllers/pedidos_controller.js"

import verificarAutenticacion from "../T_middlewares/autenticacion.js";

import { validarPedido, manejarErrores} from '../T_middlewares/validacionForms.js';


// Rutas publicas
router.get("/pedidos",verificarAutenticacion, verPedidos);
router.post("/pedidos", verificarAutenticacion, validarPedido,manejarErrores , crearPedido);
router.delete("/pedidos", verificarAutenticacion, eliminarPedido);
router.put("/pedidos", verificarAutenticacion, editarPedido);


// Exportar la variable router
export default router




