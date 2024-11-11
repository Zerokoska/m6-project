import { useEffect, useState } from "react";

export default function List_people_of_interest() {
    const [list, setList] = useState(null);

    useEffect(() => {
        async function getList() {
            let response = await fetch("http://www.mi6.test/api/people");
            let data = await response.json();
            setList(data);
            console.log(data);
        }
        getList();
    }, []);

    return (
        <>
            <div>People of interest</div>
            {list &&
                list.map((person, index) => (
                    <div key={index}>{person.name}</div>
                ))}
        </>
    );
}
