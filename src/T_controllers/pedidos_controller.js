import Pedido from "../T_models/Pedido.js";
import mongoose from "mongoose";

const crearPedido = async (req, res) => {
    const {codigo,descripcion,id_cliente,id_producto} = req.body

    if( !mongoose.Types.ObjectId.isValid(id_cliente) ) return res.status(404).json({msg:`Lo sentimos, no existe ese cliente`});
    if( !mongoose.Types.ObjectId.isValid(id_producto) ) return res.status(404).json({msg:`Lo sentimos, no existe ese producto`});
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const verificarCodigoBDD = await Pedido.findOne({codigo})
    if(verificarCodigoBDD) return res.status(400).json({msg:"Lo sentimos, el codigo del pedido ya se encuentra registrado"})
    const nuevoPedido = new Pedido(req.body)
    await nuevoPedido.save()
    res.status(200).json({msg:"Producto nuevo registrado exitosamente"})
}

const verPedidos = async (req, res) => {
    const pedidos = await Pedido.find();
    res.status(200).json(pedidos);
}

const eliminarPedido = async (req, res) => {
    const {_id} = req.body;
    await Pedido.findByIdAndDelete(_id);
    res.status(200).json({msg:"Pedido eliminado con id: " + _id});
}

const editarPedido = async (req, res) => {
    const {codigo,descripcion,id_cliente,id_producto} = req.body
    const { _id, ...data } = req.body;
    if( !mongoose.Types.ObjectId.isValid(id_cliente) ) return res.status(404).json({msg:`Lo sentimos, no existe ese cliente`});
    if( !mongoose.Types.ObjectId.isValid(id_producto) ) return res.status(404).json({msg:`Lo sentimos, no existe ese producto`});
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const verificarCodigoBDD = await Pedido.findOne({codigo})
    if(verificarCodigoBDD && verificarCodigoBDD._id!=_id) return res.status(400).json({msg:"Lo sentimos, el codigo del producto ya se encuentra registrado"})
    const pedidoActualizado = await Pedido.findByIdAndUpdate(_id, data , { new: true });
    res.status(200).json({msg:"Pedido actualizado con id: "+_id});
}

export{
    crearPedido,
    verPedidos,
    eliminarPedido,
    editarPedido,
}