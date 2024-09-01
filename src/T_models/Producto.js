import mongoose, { Schema, model } from "mongoose";

const productoSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
      maxLength: 20,
    },
    codigo: {
      type: String,
      required: true,
      trim: true,
      maxLength: 20,
      unique: true,
    },
    descripcion: {
      type: String,
      required: true,
      trim: true,
      maxLength: 20,
    },
    categoria: {
      type: String,
      required: true,
      trim: true,
      maxLength: 20,
    },
    precio: {
      type: String,
      required: true,
      trim: true,
      maxLength: 20,
    },
    // precio: {
    //     type: mongoose.Schema.Types.Decimal128,// se usa toString
    //     required: true,
    //     min:0,
    // },
    // precio: {
    //     type: Number,
    //     required: true,
    //     min:0,
    // },
    stock: {
      type: String,
      required: true,
      trim: true,
      maxLength: 20,
    },
    fecha_ingreso: {
      type: String,
      required: true,
      trim: true,
      maxLength: 20,
    },
    proveedor: {
      type: String,
      required: true,
      trim: true,
      maxLength: 20,
    },
  },
  { timestamps: true }
);

export default model("Producto", productoSchema);
