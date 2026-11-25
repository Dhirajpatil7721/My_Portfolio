const express = require("express");
const { Contact, Experience, Project } = require("../models/Model"); // Assuming all models are exported from Model.js
const {
  calculateExperienceDuration,
  calculateTotalExperience,
} = require("../utils/experienceUtils");
const router = express.Router();

/* ------------------------- CONTACT ROUTES ------------------------- */

// POST: Submit Contact Form
router.post("/contact", async (req, res) => {
  try {
    const { name, email, company, subject, message } = req.body;
    const newContact = new Contact({
      name,
      email,
      company: typeof company === "string" ? company.trim() : "",
      subject,
      message,
    });
    await newContact.save();
    res.status(201).json({ success: true, message: "Message Sent Successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
});

// GET: Fetch All Contact Messages
router.get("/contact", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
});

// DELETE: Delete Contact Message by Email
router.delete("/contact/email/:email", async (req, res) => {
  try {
    const deleted = await Contact.findOneAndDelete({ email: req.params.email });
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Message not found" });
    }
    res.status(200).json({ success: true, message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
});


/* ------------------------- EXPERIENCE ROUTES ------------------------- */

const buildExperiencePayload = (body) => {
  const {
    company,
    companyWebsite,
    position,
    startDate,
    endDate,
    exp,
    description,
  } = body;

  const duration = calculateExperienceDuration(startDate, endDate);
  if (duration && !duration.isValidOrder) {
    return { error: "End date cannot be earlier than start date" };
  }

  return {
    payload: {
      company,
      companyWebsite: typeof companyWebsite === "string" ? companyWebsite.trim() : "",
      position,
      startDate,
      endDate,
      exp: duration ? duration.formatted : exp,
      totalMonths: duration ? duration.totalMonths : 0,
      description,
    },
  };
};

// CREATE Experience
router.post("/experience", async (req, res) => {
  try {
    const { payload, error } = buildExperiencePayload(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error });
    }
    const exp = new Experience(payload);
    await exp.save();
    res.status(201).json({ success: true, data: exp });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// READ All Experiences
router.get("/experience", async (req, res) => {
  try {
    const experiences = await Experience.find();
    const enrichedExperiences = experiences.map((doc) => {
      const obj = doc.toObject();
      const duration = calculateExperienceDuration(obj.startDate, obj.endDate);
      if (duration && duration.isValidOrder) {
        obj.exp = duration.formatted;
        obj.totalMonths = duration.totalMonths;
      }
      return obj;
    });
    const totalExperience = calculateTotalExperience(enrichedExperiences);
    res.json({ success: true, data: enrichedExperiences, totalExperience });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// UPDATE Experience by Company Name
router.put("/experience/company/:company", async (req, res) => {
  try {
    const { payload, error } = buildExperiencePayload(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error });
    }

    const updated = await Experience.findOneAndUpdate(
      { company: req.params.company },
      payload,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: "Experience not found" });
    }

    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// UPDATE Experience by ID
router.put("/experience/:id", async (req, res) => {
  try {
    const { payload, error } = buildExperiencePayload(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error });
    }

    const updated = await Experience.findByIdAndUpdate(
      req.params.id,
      payload,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: "Experience not found" });
    }

    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// DELETE Experience by Company Name
router.delete("/experience/company/:company", async (req, res) => {
  try {
    const deleted = await Experience.findOneAndDelete({ company: req.params.company });

    if (!deleted) {
      return res.status(404).json({ success: false, message: "Experience not found" });
    }

    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// DELETE Experience by ID
router.delete("/experience/:id", async (req, res) => {
  try {
    const deleted = await Experience.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Experience not found" });
    }
    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});


/* ------------------------- PROJECT ROUTES ------------------------- */

// CREATE Project
router.post("/project", async (req, res) => {
  try {
    const { ico, title, description, git, host, android, ios } = req.body;
    const project = new Project({ ico, title, description, git, host, android, ios });
    await project.save();
    res.status(201).json({ success: true, data: project });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// READ All Projects
router.get("/project", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json({ success: true, data: projects });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// READ Single Project by ID
router.get("/project/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }
    res.json({ success: true, data: project });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// UPDATE Project by Title
router.put("/project/title/:title", async (req, res) => {
  try {
    const updated = await Project.findOneAndUpdate(
      { title: req.params.title }, // Find by title
      req.body, // Data to update
      { new: true } // Return the updated document
    );
    
    if (!updated) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// UPDATE Project by ID
router.put("/project/:id", async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Delete Project by Title
router.delete("/project/title/:title", async (req, res) => {
  try {
    const deleted = await Project.findOneAndDelete({ title: req.params.title });  // Find and delete by title

    if (!deleted) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    res.json({ success: true, message: "Project deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Delete Project by ID
router.delete("/project/:id", async (req, res) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    res.json({ success: true, message: "Project deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});


module.exports = router;
