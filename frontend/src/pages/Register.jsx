import { useState, useContext } from "react";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data } = await API.post("/login", form);
            login(data);
            setForm({ email: "", password: "" }); // clear form
            navigate("/dashboard");
        } catch (err) {
            alert(err.response?.data?.message || "Invalid email or password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit} className="card">
                <h2>Login</h2>

                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    required
                    onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                    }
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    required
                    onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                    }
                />

                <button disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </button>

                <p>
                    New user? <Link to="/register">Register</Link>
                </p>
            </form>
        </div>
    );
}