import mongoose ,{ Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {type: String}, // String is shorthand for {type: String}
  email: {type: String, required: true},
  username: {type: String, required: true},
  coverpic: {type: String, },
  profilepic: {type: String, },
  razorpayID: {type: String, },
  razorpaySecret: {type: String,},
  
},
 {
    timestamps: true,
  });


export default mongoose.models.User || model("User", UserSchema);
