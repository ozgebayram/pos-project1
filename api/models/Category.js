const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
  {
    title: { type: String, require: true },
  },
  { tımestamps: true }
);

const Category = mongoose.model("categories", CategorySchema);
module.exports = Category;
