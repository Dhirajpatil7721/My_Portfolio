const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String, default: "", trim: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});

const experienceSchema = new mongoose.Schema({
  company: { type: String, required: true, trim: true },
  companyWebsite: { type: String, default: "", trim: true },
  position: { type: String, trim: true },
  startDate: { type: String, trim: true },
  endDate: { type: String, trim: true },
  exp: { type: String, trim: true },
  totalMonths: { type: Number, default: 0 },
  description: { type: String, trim: true },
});

const projectSchema = new mongoose.Schema({
  ico: { type: String },
  title: { type: String, required: true },
  description: { type: String },
  git: { type: String },
  host: { type: String },
  android: { type: String },
  ios: { type: String },
});

const Contact = mongoose.model("Contact", contactSchema);
const Experience = mongoose.model("Experience", experienceSchema);
const Project = mongoose.model("Project", projectSchema);

module.exports = { Contact, Experience, Project };
