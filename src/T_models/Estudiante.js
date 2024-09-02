import mongoose, { Schema, model } from "mongoose";
const estudianteSchema = new Schema(
    {
        cedula: {
            type: String,
            required: true,
            trim: true,
            maxLenght:20,
        },
        nombre: {
            type: String,
            required: true,
            trim: true,
            maxLenght: 30,
        },
        apellido: {
            type: String,
            required: true,
            trim: true,
            maxLenght: 10,
        },
        fecha_nacimiento: {
            type: String,
            required: true,
            trim: true,
            maxLenght: 20,
        },
        ciudad: {
            type: String,
            required: true,
            trim: true,
            maxLenght: 10,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            maxLenght: 20,
            unique: true,
        },
        direccion: {
            type: String,
            required: true,
            trim: true,
            maxLenght: 30,
        },
        telefono: {
            type: String,
            required: true,
            trim: true,
            maxLenght: 10,
        }
    },
    {
        timestamps: true,
    }
);
export default model("Estudiante", estudianteSchema);
