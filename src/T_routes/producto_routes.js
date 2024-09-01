// Importar Router de Express
import {Router} from 'express'
const router = Router()
// Importar los métodos del controlador 
import {
    crearProducto,
    verProductos,
    eliminarProducto,
    editarProducto
} from "../T_controllers/producto_controller.js"

import verificarAutenticacion from "../T_middlewares/autenticacion.js";

import { validarProducto, manejarErrores} from '../T_middlewares/validacionForms.js';


// Rutas publicas
router.get("/productos",verificarAutenticacion, verProductos);
router.post("/productos", verificarAutenticacion, validarProducto, manejarErrores , crearProducto);
router.delete("/productos", verificarAutenticacion, eliminarProducto);
router.put("/productos", verificarAutenticacion, editarProducto);


// Exportar la variable router
export default router






