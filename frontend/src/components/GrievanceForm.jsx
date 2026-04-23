import { useState } from "react";
import API from "../services/api";

export default function GrievanceForm({ refresh }) {
    const [form, setForm] = useState({ title: "", description: "", category: "Academic" });

    const submit = async (e) => {
        e.preventDefault();
        await API.post("/grievances", form);
        refresh();
    };

    return (
        <form className="card" onSubmit={submit}>
            <input placeholder="Title" required onChange={(e) => setForm({ ...form, title: e.target.value })} />
            <input placeholder="Description" required onChange={(e) => setForm({ ...form, description: e.target.value })} />
            <select onChange={(e) => setForm({ ...form, category: e.target.value })}>
                <option>Academic</option>
                <option>Hostel</option>
                <option>Transport</option>
                <option>Other</option>
            </select>
            <button>Add</button>
        </form>
    );
}