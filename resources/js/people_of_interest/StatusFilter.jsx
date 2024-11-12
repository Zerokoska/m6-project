import { useEffect, useState } from "react";

export default function StatusFilter({ selectedStatus, setSelectedStatus }) {
    const [statuses, setStatuses] = useState([]);
    const [statusName, setStatusName] = useState("");

    useEffect(() => {
        async function loadStatuses() {
            let response = await fetch("http://www.mi6.test/api/statuses");
            let data = await response.json();
            setStatuses(data);
            console.log(statuses);
        }
        loadStatuses();
    }, []);

    return (
        <>
            <p>Statuses:</p>
            <p>Filtered status: {statusName}</p>
            <div className="status-buttons">
                {statuses.map((item) => {
                    return (
                        <button
                            onClick={() => {
                                setSelectedStatus(item.id);
                                setStatusName(item.name);
                            }}
                            key={item.id}
                        >
                            {item.name}
                        </button>
                    );
                })}
            </div>
        </>
    );
}
