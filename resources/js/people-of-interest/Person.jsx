import { useState, useEffect } from "react";
import PersonDetail from "./PersonDetail";

function Person({personId}){

    const[person, setPerson] = useState(null);

    const loadData = async () => {

        const response = await fetch(`/api/people/${personId}`);
        const data = await response.json();
        console.log(data);
        setPerson(data)
    }

    useEffect(()=>{
        console.log(personId);
        if(personId) loadData();
    }, [personId])

    return(
        <div>
            <PersonDetail person={person}/>
        </div>
    )
}

export default Person;