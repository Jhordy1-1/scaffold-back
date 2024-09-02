// Requerir los módulos
import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';

// Configuración específica para desarrollo utilizando dotenv
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

import routerUsuario from './T_routes/usuario_routes.js'
import routerEstudiante from './T_routes/estudiante_routes.js'
import routerMateria from './T_routes/materia_routes.js'
import routerMatricula from './T_routes/matricula_routes.js'


// Inicializaciones
const app = express()

// Configuraciones 
app.set('port', process.env.port || 3000)
app.use(cors())

// Middlewares 
app.use(express.json())

// Rutas 
app.use('/api', routerUsuario)
app.use('/api', routerEstudiante)
app.use('/api', routerMateria)
app.use('/api', routerMatricula)

// Manejo de una ruta que no sea encontrada
app.use((req, res) => res.status(404).send("Endpoint no encontrado - 404"))

// Exportar la instancia de express por medio de app
export default app
