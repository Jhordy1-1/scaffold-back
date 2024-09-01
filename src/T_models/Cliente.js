import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const clienteSchema = new Schema(
  {
    cedula: {
      type: Number,
      required: true,
      trim: true,
      default: 99999999999,
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
      maxLenght: 20,
    },
    telefono: {
      type: String,
      required: true,
      trim: true,
      maxLenght: 20,
    },
    fecha_nacimiento: {
      type: String,
      required: true,
      trim: true,
      maxLenght: 20,
    },
    // fecha_nacimiento: {
    //     type: Date,
    //     default: Date.now,
    // },
  },
  {
    timestamps: true,
  }
);

export default model("Cliente", clienteSchema);
