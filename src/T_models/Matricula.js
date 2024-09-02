import mongoose, { Schema, model } from "mongoose";

const matriculaSchema = new Schema(
  {
    codigo: {
        type: Number,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
        maxLength: 20,
        trim: true,
        required: true,
    },
    id_materia: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Materia",
    },
    id_estudiante: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Estudiante",
    },
  },
  { timestamps: true }
);

export default model("Matricula", matriculaSchema);
