import Grievance from "../models/Grievance.js";

export const createGrievance = async (req, res) => {
    const { title, description, category } = req.body;

    const grievance = await Grievance.create({
        user: req.user,
        title,
        description,
        category,
    });

    res.json(grievance);
};

export const getAllGrievances = async (req, res) => {
    const grievances = await Grievance.find({ user: req.user });
    res.json(grievances);
};

export const getGrievanceById = async (req, res) => {
    const grievance = await Grievance.findById(req.params.id);

    if (!grievance) {
        return res.status(404).json({ message: "Not found" });
    }

    res.json(grievance);
};

export const updateGrievance = async (req, res) => {
    const grievance = await Grievance.findById(req.params.id);

    if (!grievance) {
        return res.status(404).json({ message: "Not found" });
    }

    grievance.title = req.body.title || grievance.title;
    grievance.description = req.body.description || grievance.description;
    grievance.category = req.body.category || grievance.category;
    grievance.status = req.body.status || grievance.status;

    const updated = await grievance.save();
    res.json(updated);
};

export const deleteGrievance = async (req, res) => {
    const grievance = await Grievance.findById(req.params.id);

    if (!grievance) {
        return res.status(404).json({ message: "Not found" });
    }

    await grievance.deleteOne();
    res.json({ message: "Deleted successfully" });
};

export const searchGrievance = async (req, res) => {
    const { title } = req.query;

    const results = await Grievance.find({
        user: req.user,
        title: { $regex: title, $options: "i" },
    });

    res.json(results);
};