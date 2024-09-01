import Cliente from "../T_models/Cliente.js";



const crearCliente = async (req, res) => {
    const {email} = req.body
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const verificarEmailBDD = await Cliente.findOne({email})
    if(verificarEmailBDD) return res.status(400).json({msg:"Lo sentimos, el email ya se encuentra registrado"})
    const nuevoCliente = new Cliente(req.body)
    await nuevoCliente.save()
    res.status(200).json({msg:"Cliente nuevo registrado exitosamente"})
}

const verClientes = async (req, res) => {
    const clientes = await Cliente.find();
    res.status(200).json(clientes);
}

const eliminarCliente = async (req, res) => {
    await Cliente.findByIdAndDelete(req.body._id);
    res.status(200).json({msg:"cliente eliminado con id: " + req.body._id});
}

const editarCliente = async (req, res) => {
    const { _id, ...data } = req.body;
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const clienteActualizado = await Cliente.findByIdAndUpdate(_id, data , { new: true });
    res.status(200).json({msg:"cliente actualizado con id: "+_id});
}

export {
    crearCliente,
    verClientes,
    eliminarCliente,
    editarCliente
}