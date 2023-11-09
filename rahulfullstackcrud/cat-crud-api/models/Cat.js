import mongoose from "mongoose";
const Schema = mongoose.Schema;
// a schema from mongoose to structure the Cat data model
let Cat = new Schema({
  name: { type: String },
  aka: { type: String },
  bio: { type: String },
  age: { type: Number },
  gender: { type: String },
  species: { type: String },
  likesCuddles: { type: Boolean },
  image: { type: String },
});
//export it and name it "cats" based off the Cat schema
export default mongoose.model("cats", Cat);
