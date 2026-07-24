import mongoose from "mongoose";
import { Schema, model } from "mongoose";


const paymentSchema = new Schema({
  to_user: { type: String }, // String is shorthand for {type: String}
  from_user: { type: String }, // String is shorthand for {type: String}
  message: { type: String},
  username: { type: String }, // String is shorthand for {type: String}
  oid: { type: String, required: true },
  amount: { type: Number, required: true },
  done: { type: Boolean, default: false }

}, {
  timestamps: true,
});

export default mongoose.models.Payment || model("Payment", paymentSchema);