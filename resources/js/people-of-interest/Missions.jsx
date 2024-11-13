import { useEffect, useState } from "react";
import MissionEditForm from "./MissionEditForm";

function Missions(){

    const[missions, setMissions] = useState(null);
    const[missionId, setMissionId] = useState(null);

    const loadMissions = async() =>{
        const response = await fetch("/api/missions")
        const data = await response.json()
        console.log(data);
        setMissions(data);
    }

    useEffect(()=>{

        loadMissions();

    },[missionId])

    return(
        <div>
            <h1>Missions</h1>
        {missionId ?
        <MissionEditForm missionId={ missionId } setMissionId={ setMissionId }/>
        : (missions?.map((mission) =>(
                <div key ={mission.id}>
                    {mission.name}
                    <button onClick={() => {setMissionId(mission.id)}}>select</button>
                </div>
            )))}
        </div>

    )
}

export default Missions;