import mongoose from "mongoose";

const imgSchema = new mongoose.Schema({
  data: String
});
const Img = mongoose.model("Img", imgSchema);
export default Img;
