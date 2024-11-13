import { useState } from "react";
import { useEffect } from "react";

function StatusFilter({selectedStatus, setSelectedStatus}){

    const[statuses, setStatuses] = useState([]);

    const loadStatuses = async() =>{
        const response = await fetch("/api/statuses");
        const data = await response.json();
        console.log(data);
        setStatuses(data)
    }

    useEffect(()=>{
        loadStatuses()
    }, [])

    return(
    <div className="status-filter">
        {statuses?.map((personStatus) => (
            <div key = {personStatus.id}>
                <button onClick = {()=>{setSelectedStatus(personStatus.id)}}>{personStatus.name}</button>
            </div>
        ))}
    </div>
    )
}

export default StatusFilter;