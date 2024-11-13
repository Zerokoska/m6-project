import { useState, useEffect } from "react";
import Person from "./Person";
import StatusFilter from "./StatusFilter";

function People(){
    const[people, setPeople] = useState(null);
    const[personId, setPersonId] = useState(null);
    const[selectedStatus, setSelectedStatus] = useState("");

    const loadData = async () => {
        const response = await fetch(`/api/people` + '?status=' + encodeURIComponent(selectedStatus));
        const data = await response.json();
        setPeople(data);
    }

    useEffect(()=>{
        loadData()
    }, [selectedStatus])

    return(
         <div>
            <StatusFilter selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus}/>
            {personId ? 
            <Person personId = {personId} />
            :(
            people?.map((person) => (
                <div key={person.id}>
                    <div>
                        {person.name}
                        <button onClick={() => {setPersonId(person.id)}}>select</button>
                    </div>
                </div>
            )))}
        </div>
    )
}

export default People;