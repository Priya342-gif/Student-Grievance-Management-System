import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.post("/register", form);
        navigate("/login");
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit} className="card">
                <h2>Register</h2>
                <input placeholder="Name" required
                    onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <input type="email" placeholder="Email" required
                    onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <input type="password" placeholder="Password" required
                    onChange={(e) => setForm({ ...form, password: e.target.value })} />
                <button>Register</button>
                <p>Already user? <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
}