import mongoose, { Schema, model } from "mongoose";

const pedidoSchema = new Schema(
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
    id_cliente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cliente",
    },
    id_producto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Producto",
    },
  },
  { timestamps: true }
);

export default model("Pedido", pedidoSchema);
