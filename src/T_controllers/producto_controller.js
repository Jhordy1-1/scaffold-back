import Producto from "../T_models/Producto.js";


const crearProducto = async (req, res) => {
    const {codigo} = req.body
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const verificarCodigoBDD = await Producto.findOne({codigo})
    if(verificarCodigoBDD) return res.status(400).json({msg:"Lo sentimos, el codigo del producto ya se encuentra registrado"})
    const nuevoProducto = new Producto(req.body)
    await nuevoProducto.save()
    res.status(200).json({msg:"Producto nuevo registrado exitosamente"})
}

const verProductos = async (req, res) => {
    const productos = await Producto.find();
    res.status(200).json(productos);
}

const eliminarProducto = async (req, res) => {
    const { _id} = req.body;
    await Producto.findByIdAndDelete(_id);
    res.status(200).json({msg:"Producto eliminado con id: " + _id});
}

const editarProducto = async (req, res) => {
    const { _id, ...data } = req.body;
    const {codigo} = req.body
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const verificarCodigoBDD = await Producto.findOne({codigo})

    if(verificarCodigoBDD && verificarCodigoBDD._id!=_id ) return res.status(400).json({msg:"Lo sentimos, el codigo del producto ya se encuentra registrado"})
    const productoActualizado = await Producto.findByIdAndUpdate(_id, data , { new: true });
    res.status(200).json({msg:"Producto actualizado con id: "+_id});
}

export {
    crearProducto,
    verProductos,
    eliminarProducto,
    editarProducto
}