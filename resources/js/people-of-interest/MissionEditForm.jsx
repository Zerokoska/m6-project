import { useEffect, useState } from "react";
// import axios from "axios";

function MissionEditForm({missionId, setMissionId}){

    const[mission, setMission] = useState(null);
    const [values, setValues] = useState({
        name: 'name',
        year: 'year',
        outcome: 'outcome'
    });
     
    const handleChange = (event) => {
        setValues(previous_values => {
            return ({...previous_values, 
                [event.target.name]: event.target.value
            });
        });
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        try {
            const response = axios.post(url, data);
        } catch (error) {
            
        }

    }

    const loadMission = async() =>{
        const response = await fetch(`/api/missions/${missionId}`);
        const data = await response.json();
        console.log(data);
        setMission(data);
    }

    useEffect(()=>{
        loadMission();
    },[missionId])

    return(
        <div>
        <button onClick={()=>{setMissionId(null)}}>Close</button>
        <h1>Edit Mission {mission && mission.id}</h1>
        
        <form action="" method="post" onSubmit={ handleSubmit }>
        Name: <input onChange={(e)=>{handleChange(e)}}
        type="text" name='name' defaultValue={mission && mission.name}/> <br />

        Year: <input onChange={(e)=>{handleChange(e)}}
        type="text" name='year' defaultValue={mission && mission.year}/> <br />

        Outcome: <input onChange={(e)=>{handleChange(e)}}
        type="text" name='outcome' defaultValue={mission && mission.outcome}/> <br />

        <button>Edit</button>
        </form>
        </div>
        
    )
}

export default MissionEditForm;