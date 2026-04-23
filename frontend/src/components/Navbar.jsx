import { useNavigate } from "react-router-dom";

export default function Navbar({ logout }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="navbar">
            <h2>Grievance System</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}