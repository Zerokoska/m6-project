import { useEffect, useState } from "react";
import Person_detail from "./Person_detail";

export default function List_people_of_interest() {
    const [list, setList] = useState(null);
    const [personId, setPersonId] = useState(null);

    useEffect(() => {
        async function getList() {
            try {
                let response = await fetch("http://www.mi6.test/api/people");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                let data = await response.json();
                setList(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        getList();
    }, []);

    return (
        <>
            {!personId ? (
                list &&
                list.map((person, index) => (
                    <div className="list-entry" key={index}>
                        <div>{person.name}</div>
                        <button onClick={() => setPersonId(person.id)}>
                            See details
                        </button>
                    </div>
                ))
            ) : (
                <Person_detail personId={personId} setPersonId={setPersonId} />
            )}
        </>
    );
}
