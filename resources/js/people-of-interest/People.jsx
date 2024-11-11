import { useState, useEffect } from "react";


function People(){

    const[people, setPeople] = useState(null);

    const loadData = async() =>{

        const response = await fetch(`/api/people`);
        const data = await response.json();
        console.log(data);
        setPeople(data);
    }

    useEffect(()=>{
        loadData()
    },[])


    return(
        <div>
            
            {people?.map((person) => (
                <div key={person.id}>
                    <div>{person.name}</div>
                </div>
        ))}
        </div>
    )

}

export default People;