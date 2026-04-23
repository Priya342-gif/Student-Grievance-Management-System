// import { useNavigate } from "react-router-dom";

// export default function Navbar({ logout }) {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         logout();
//         navigate("/login");
//     };

//     return (
//         <div className="navbar">
//             <h2>Grievance System</h2>
//             <button onClick={handleLogout}>Logout</button>
//         </div>
//     );
// }
import { useNavigate } from "react-router-dom";

export default function Navbar({ logout }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/"); // ✅ changed here
    };

    return (
        <div className="navbar">
            <h2>Grievance System</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}