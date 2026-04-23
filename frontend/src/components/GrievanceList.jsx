import API from "../services/api";

export default function GrievanceList({ data, refresh }) {

    const del = async (id) => {
        try {
            await API.delete(`/grievances/${id}`);
            refresh();
        } catch (err) {
            console.log(err.response?.data || err.message);
        }
    };

    const update = async (id) => {
        try {
            await API.put(`/grievances/${id}`, { status: "Resolved" });
            refresh();
        } catch (err) {
            console.log(err.response?.data || err.message);
        }
    };

    return (
        <div>
            {data.map((g) => (
                <div key={g._id} className="card">
                    <h3>{g.title}</h3>
                    <p>{g.description}</p>
                    <span>{g.category} | {g.status}</span>
                    <div>
                        <button onClick={() => update(g._id)}>Resolve</button>
                        <button onClick={() => del(g._id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}