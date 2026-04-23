import API from "../services/api";

export default function SearchBar({ setData }) {
    const search = async (e) => {
        const res = await API.get(`/grievances/search?title=${e.target.value}`);
        setData(res.data);
    };

    return (
        <input className="search" placeholder="Search..." onChange={search} />
    );
}