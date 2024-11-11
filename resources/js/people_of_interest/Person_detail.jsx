import { useEffect, useState } from "react";

export default function Person_detail({ personId, setPersonId }) {
    const [personDetail, setPersonDetail] = useState([]);

    useEffect(() => {
        async function fetchPerson() {
            let response = await fetch(
                `http://www.mi6.test/api/people/${personId}`
            );
            let data = await response.json();
            setPersonDetail(data);
            console.log(data);
        }
        fetchPerson();
    }, []);

    return (
        <div>
            {personDetail.map((item) => {
                return (
                    <div key={item.id}>
                        <div>Name: {item.name}</div>
                        <div>Nationality: {item.nationality}</div>
                        <div>Occupation: {item.occupation}</div>
                        <div>Eye color: {item.eye_color}</div>
                        <div>Hair color: {item.hair_color}</div>
                        <div>Status: {item.status.name}</div>
                        <img
                            src={`/images/${item.image.path}`}
                            alt={item.name}
                        />
                    </div>
                );
            })}

            <button onClick={() => setPersonId(null)}>Back</button>
        </div>
    );
}
