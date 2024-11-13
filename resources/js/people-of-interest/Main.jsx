import People from "./People";
import Missions from "./Missions";

function Main({content}){
    return(
        <div className="main">
            {content == "/" ? 
                <h1>Welcome to MI6</h1> :
                (content == "people_of_interest" ? 
                    <People /> :
                    <Missions />
                )
            }
        </div>
    )
}

export default Main;