import Matricula from "../T_models/Matricula.js";
import Materia from "../T_models/Materia.js";

const crearMatricula = async (req, res) => {
    const {codigo,id_estudiante,id_materia} = req.body

    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    if( !mongoose.Types.ObjectId.isValid(id_estudiante) ) return res.status(404).json({msg:`Lo sentimos, no existe el estudiante`});
    if( !mongoose.Types.ObjectId.isValid(id_materia) ) return res.status(404).json({msg:`Lo sentimos, no existe la materia`});
    const verificarCodigoBDD = await Materia.findOne({codigo})
    if(verificarCodigoBDD) return res.status(400).json({msg:"El codigo de la materia ya se encuentra registrado"})
    const verificarMateriaBDD = await Materia.findOne({id_materia,id_estudiante})
    if(verificarMateriaBDD) return res.status(400).json({msg:"El estudiante ya se encuentra registrado en la materia"})
    const nuevoMatricula = new Matricula(req.body)
    await nuevoMatricula.save()
    res.status(200).json({msg:"Matricula registrada exitosamente"})
}

const verMatriculas = async (req, res) => {
    const matriculas = await Matricula.find()
    res.status(200).json(matriculas);
}
const verMatricula = async (req, res) => {
    const{id} = req.params
    const matriculas = await Matricula.findById(id)
    res.status(200).json(matriculas);
}
const eliminarMatricula= async (req, res) => {
    const{id} = req.params
    await Matricula.findByIdAndDelete(id);
    res.status(200).json({msg:"La matricula fue eliminada con id:" + id});
}

const editarMatricula = async (req, res) => {
    const {codigo,id_estudiante,id_materia}= req.body

    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    if( !mongoose.Types.ObjectId.isValid(id_estudiante) ) return res.status(404).json({msg:`Lo sentimos, no existe ese estudiante`});
    if( !mongoose.Types.ObjectId.isValid(id_materia) ) return res.status(404).json({msg:`Lo sentimos, no existe esta matricula`});
    const verificarCodigoBDD = await Matricula.findOne({codigo})
    if(verificarCodigoBDD && verificarCodigoBDD._id!=_id) return res.status(400).json({msg:"Lo sentimos, el codigo de la matricula ya se encuentra registrado"})
    const matriculaActualizada = await Matricula.findByIdAndUpdate(_id, data , { new: true });
    res.status(200).json({msg:"Matricula actualizada con id: "+_id},matriculaActualizada);
}
export{
    crearMatricula,
    verMatriculas,
    verMatricula,
    eliminarMatricula,
    editarMatricula
}