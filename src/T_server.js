// Requerir los módulos
import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';

// Configuración específica para desarrollo utilizando dotenv
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

import routerUsuario from './T_routes/usuario_routes.js'
import routerCliente from './T_routes/cliente_routes.js'
import routerProducto from './T_routes/producto_routes.js'
import routerPedido from './T_routes/pedido_routes.js'


// Inicializaciones
const app = express()

// Configuraciones 
app.set('port', process.env.port || 3000)
app.use(cors())

// Middlewares 
app.use(express.json())

// Rutas 
app.use('/api', routerUsuario)
app.use('/api', routerCliente)
app.use('/api', routerProducto)
app.use('/api', routerPedido)

// Manejo de una ruta que no sea encontrada
app.use((req, res) => res.status(404).send("Endpoint no encontrado - 404"))

// Exportar la instancia de express por medio de app
export default app
