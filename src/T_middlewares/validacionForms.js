import { check, validationResult } from 'express-validator';


export const validarCliente = [
    check('cedula')
        .isInt({ min: 1000000000, max: 9999999999 })
        .withMessage('La cédula debe ser un número de 10 dígitos.')
        .notEmpty()
        .withMessage('El campo "cedula" es obligatorio'),

    check('nombre')
        .isLength({ min: 3, max: 30 })
        .withMessage('El nombre debe tener entre 3 y 30 caracteres.')
        .isAlpha('es-ES', { ignore: 'áéíóúÁÉÍÓÚñÑ ' })
        .withMessage('El nombre solo debe contener letras.')
        .notEmpty()
        .withMessage('El campo "nombre" es obligatorio'),

    check('apellido')
        .isLength({ min: 3, max: 10 })
        .withMessage('El apellido debe tener entre 3 y 10 caracteres.')
        .isAlpha('es-ES', { ignore: 'áéíóúÁÉÍÓÚñÑ ' })
        .withMessage('El apellido solo debe contener letras.')
        .notEmpty()
        .withMessage('El campo "apellido" es obligatorio'),

    check('ciudad')
        .isLength({ min: 3, max: 10 })
        .withMessage('La ciudad debe tener entre 3 y 10 caracteres.')
        .isAlpha('es-ES', { ignore: 'áéíóúÁÉÍÓÚñÑ ' })
        .withMessage('La ciudad solo debe contener letras.')
        .notEmpty()
        .withMessage('El campo "ciudad" es obligatorio'),

    check('email')
        .isEmail()
        .withMessage('El campo "email" no es correcto.')
        .notEmpty()
        .withMessage('El campo "email" es obligatorio'),

    check('direccion')
        .isLength({ min: 5, max: 20 })
        .withMessage('La dirección debe tener entre 5 y 20 caracteres.')
        .notEmpty()
        .withMessage('El campo "direccion" es obligatorio'),

    check('telefono')
        .isLength({ min: 10, max: 20 })
        .withMessage('El teléfono debe tener entre 10 y 20 caracteres.')
        .isNumeric()
        .withMessage('El teléfono solo debe contener números.')
        .notEmpty()
        .withMessage('El campo "telefono" es obligatorio'),

    check('fecha_nacimiento')
        .matches(/^\d{4}-\d{2}-\d{2}$/)
        .withMessage('La fecha de nacimiento debe tener el formato YYYY-MM-DD.')
        .notEmpty()
        .withMessage('El campo "fecha_nacimiento" es obligatorio'),
];

// Validaciones para la tabla usuarios
export const validarUsuario = [
    check('nombre')
        .isLength({ min: 3, max: 30 })
        .withMessage('El nombre debe tener entre 3 y 30 caracteres.')
        .isAlpha('es-ES', { ignore: 'áéíóúÁÉÍÓÚñÑ ' })
        .withMessage('El nombre solo debe contener letras.')
        .notEmpty()
        .withMessage('El campo "nombre" es obligatorio'),

    check('apellido')
        .isLength({ min: 3, max: 20 })
        .withMessage('El apellido debe tener entre 3 y 20 caracteres.')
        .isAlpha('es-ES', { ignore: 'áéíóúÁÉÍÓÚñÑ ' })
        .withMessage('El apellido solo debe contener letras.')
        .notEmpty()
        .withMessage('El campo "apellido" es obligatorio'),

    check('email')
        .isEmail()
        .withMessage('El campo "email" no es correcto.')
        .notEmpty()
        .withMessage('El campo "email" es obligatorio'),

    check('password')
        .isLength({ min: 8, max: 20 })
        .withMessage('El password debe tener entre 8 y 20 caracteres.')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*).*$/)
        .withMessage('El password debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.')
        .notEmpty()
        .withMessage('El campo "password" es obligatorio'),
];

// Validaciones para la tabla productos
export const validarProducto = [
    check('codigo')
        .isLength({ min: 1, max: 20 })
        .withMessage('El código del producto debe tener entre 1 y 20 caracteres.')
        .notEmpty()
        .withMessage('El campo "codigo" es obligatorio'),

    check('nombre')
        .isLength({ min: 3, max: 20 })
        .withMessage('El nombre del producto debe tener entre 3 y 20 caracteres.')
        .notEmpty()
        .withMessage('El campo "nombre" es obligatorio'),

    check('descripcion')
        .isLength({ min: 5, max: 20 })
        .withMessage('La descripción del producto debe tener entre 5 y 20 caracteres.')
        .notEmpty()
        .withMessage('El campo "descripcion" es obligatorio'),

    check('categoria')
        .isLength({ min: 3, max: 20 })
        .withMessage('La categoría debe tener entre 3 y 20 caracteres.')
        .notEmpty()
        .withMessage('El campo "categoria" es obligatorio'),

    check('precio')
        .isNumeric()
        .withMessage('El precio debe ser un número.')
        .notEmpty()
        .withMessage('El campo "precio" es obligatorio'),

    check('stock')
        .isInt({ min: 0 })
        .withMessage('El stock debe ser un número entero mayor o igual a 0.')
        .notEmpty()
        .withMessage('El campo "stock" es obligatorio'),

    check('fecha_ingreso')
        .matches(/^\d{4}-\d{2}-\d{2}$/)
        .withMessage('La fecha de ingreso debe tener el formato YYYY-MM-DD.')
        .notEmpty()
        .withMessage('El campo "fecha_ingreso" es obligatorio'),

    check('proveedor')
        .isLength({ min: 3, max: 20 })
        .withMessage('El nombre del proveedor debe tener entre 3 y 20 caracteres.')
        .notEmpty()
        .withMessage('El campo "proveedor" es obligatorio'),
];

export const validarPedido = [
    check('codigo')
        .isLength({ min: 1, max: 20 })
        .withMessage('El código del producto debe tener entre 1 y 20 caracteres.')
        .notEmpty()
        .withMessage('El campo "codigo" es obligatorio'),

    check('descripcion')
        .isLength({ min: 5, max: 20 })
        .withMessage('La descripción del producto debe tener entre 5 y 20 caracteres.')
        .notEmpty()
        .withMessage('El campo "descripcion" es obligatorio'),
];

// Middleware para manejar errores
export const manejarErrores = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    } else {
        return res.status(400).json({ errors: errors.array() });
    }
};
