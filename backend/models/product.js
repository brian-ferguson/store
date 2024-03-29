const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name:String,
    price:Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
