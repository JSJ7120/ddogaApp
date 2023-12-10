const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  cateId: { type: Number, required: true },
  id: { type: Number, required: true },
  area: { type: String, required: true },
  recommendScore: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  district: { type: String, required: true },
  address: { type: String, required: true },
  thumbNail: { type: String },
  title: { type: String, required: true, unique: true },
  counselDetails: { type: Array, default: [] },
  onlineCounselCount: { type: Number, default: 0 },
  phoneCounselCount: { type: Number, default: 0 },
  totalCounselCount: { type: Number, default: 0 },
  images: { type: Array, default: [] },
  rank: { type: String, required: true },
  establish: { type: Number, required: true },
  onlineCounsel: { type: Boolean },
  navId: { type: Array, default: [] },
});

module.exports = mongoose.model("Lists", listSchema);
