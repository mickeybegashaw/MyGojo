import mongoose from "mongoose";
const Schema = mongoose.Schema;

const HouseSchema = new Schema(
  {
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
    images: {
      id:{
        type:String,
        required:true
      },
      url:{
        type:String,
        required:true
      }
    },
  },
  { timestamps: true }
);

const House = mongoose.models.House || mongoose.model("House", HouseSchema);
export default House;
