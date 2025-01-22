import mongoose from "mongoose";
const Schema = mongoose.Schema;

const HouseSchema = new Schema(
  {
    posted_by:{
      id:{
        type:String,
        required:true
      },
      name:{
        type:String,
        required:true
      },
      image:{
        type:String,
        required:true
      },
      email:{
        type:String,
        required:true
      }
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: [String],
      required: true,
    },
    beds: {
      type: Number,
      required: true,
    },
    bath: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: [{
      url: { type: String, required: true },
      id: { type: String, required: true }
    }]
  },
  { timestamps: true }
);

const House = mongoose.models.House || mongoose.model("House", HouseSchema);
export default House;
