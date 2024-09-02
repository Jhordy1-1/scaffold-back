import Estudiante from "../T_models/Estudiante.js";



const crearEstudiante = async (req, res) => {
    const {email} = req.body
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const verificarEmailBDD = await Estudiante.findOne({email})
    if(verificarEmailBDD) return res.status(400).json({msg:"Lo sentimos, el email ya se encuentra registrado"})
    const nuevoEstudiante = new Estudiante(req.body)
    await nuevoEstudiante.save()
    res.status(200).json({msg:"Estudiante nuevo registrado exitosamente"})
}

const verEstudiantes = async (req, res) => {
    const estudiantes = await Estudiante.find();
    res.status(200).json(estudiantes);
}

const verEstudiante = async (req, res) => {
    const{id} = req.params
    const estudiante = await Estudiante.findById(id);
    res.status(200).json(estudiante);
}

const eliminarEstudiante = async (req, res) => {
    const{id} = req.params;
    await Estudiante.findByIdAndDelete(id);
    res.status(200).json({msg:"Estudiante eliminado con id: " + id});
}

const editarEstudiante= async (req, res) => {
    const { _id, ...data } = req.body;
    const { email } = req.body;
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const verificarEmailBDD = await Estudiante.findOne({email})
    if(verificarEmailBDD && verificarEmailBDD._id!=_id) return res.status(400).json({msg:"Lo sentimos, el email no puedes ser de otro usuario registrado"})
    const estudianteActualizado = await Estudiante.findByIdAndUpdate(_id, data , { new: true });
    res.status(200).json({msg:"Estudiante actualizado con id: "+_id});
}

export {
    crearEstudiante,
    verEstudiantes,
    verEstudiante,
    eliminarEstudiante,
    editarEstudiante
}