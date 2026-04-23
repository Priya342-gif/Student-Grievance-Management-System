import mongoose from "mongoose";

const grievanceSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        title: { type: String, required: true },
        description: { type: String, required: true },
        category: {
            type: String,
            enum: ["Academic", "Hostel", "Transport", "Other"],
        },
        status: {
            type: String,
            enum: ["Pending", "Resolved"],
            default: "Pending",
        },
        date: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

export default mongoose.model("Grievance", grievanceSchema);