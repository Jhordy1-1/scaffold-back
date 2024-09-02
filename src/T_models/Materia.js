import mongoose, { Schema, model } from "mongoose";

const materiaSchema = new Schema(
    {
        codigo: {
            type: String,
            maxLength: 20,
            trim: true,
            required: true,
        },
        descripcion: {
            type: String,
            maxLength: 20,
            trim: true,
            required: true,
        },
        nombre: {
            type: String,
            required: true,
            trim: true,
            maxLenght: 20,
        },
        creditos: {
            type: Number,
            required: true,
            trim: true,
        }
    },
    { timestamps: true }
);

export default model("Materia", materiaSchema);
