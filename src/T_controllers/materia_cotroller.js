import Materia from "../T_models/Materia.js";


const crearMateria= async (req, res) => {
    const {codigo} = req.body
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const verificarCodigoBDD = await Materia.findOne({codigo})
    if(verificarCodigoBDD) return res.status(400).json({msg:"Lo sentimos, el codigo de la materia ya se encuentra registrado"})
    const nuevoMateria = new Materia(req.body)
    await nuevoMateria.save()
    res.status(200).json({msg:"Materia nueva registrada exitosamente"})
}

const verMaterias = async (req, res) => {
    const materias = await Materia.find();
    res.status(200).json(materias);
}
const verMateria = async (req, res) => {
    const{id} = req.params
    const materia = await Materia.findById(id);
    res.status(200).json(materia);
}

const eliminarMateria = async (req, res) => {
    const {id} = req.params;
    await Materia.findByIdAndDelete(_id);
    res.status(200).json({msg:"Materia eliminado con id: " + _id});
}

const editarMateria = async (req, res) => {
    const { _id, ...data } = req.body;
    const {codigo} = req.body
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const verificarCodigoBDD = await Materia.findOne({codigo})

    if(verificarCodigoBDD && verificarCodigoBDD._id!=_id ) return res.status(400).json({msg:"Lo sentimos, el codigo del producto ya se encuentra registrado"})
    const productoActualizado = await Materia.findByIdAndUpdate(_id, data , { new: true });
    res.status(200).json({msg:"Materia actualizado con id: "+_id});
}

export {
    crearMateria,
    verMaterias,
    verMateria,
    eliminarMateria,
    editarMateria
}