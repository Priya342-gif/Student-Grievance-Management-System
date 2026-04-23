import { useState, useContext } from "react";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await API.post("/login", form);
        login(data);
        navigate("/dashboard");
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit} className="card">
                <h2>Login</h2>
                <input type="email" placeholder="Email" required
                    onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <input type="password" placeholder="Password" required
                    onChange={(e) => setForm({ ...form, password: e.target.value })} />
                <button>Login</button>
                <p>New user? <Link to="/register">Register</Link></p>
            </form>
        </div>
    );
}