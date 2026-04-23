import express from "express";
import {
    createGrievance,
    getAllGrievances,
    getGrievanceById,
    updateGrievance,
    deleteGrievance,
    searchGrievance,
} from "../controllers/grievanceController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createGrievance);
router.get("/", protect, getAllGrievances);
router.get("/search", protect, searchGrievance);
router.get("/:id", protect, getGrievanceById);
router.put("/:id", protect, updateGrievance);
router.delete("/:id", protect, deleteGrievance);

export default router;