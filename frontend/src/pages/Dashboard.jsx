import { useEffect, useState, useContext } from "react";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import GrievanceForm from "../components/GrievanceForm";
import GrievanceList from "../components/GrievanceList";
import SearchBar from "../components/SearchBar";

export default function Dashboard() {
    const [data, setData] = useState([]);
    const { logout } = useContext(AuthContext);

    const fetchData = async () => {
        const res = await API.get("/grievances");
        setData(res.data);
    };

    useEffect(() => { fetchData(); }, []);

    return (
        <div>
            <Navbar logout={logout} />
            <GrievanceForm refresh={fetchData} />
            <SearchBar setData={setData} />
            <GrievanceList data={data} refresh={fetchData} />
        </div>
    );
}