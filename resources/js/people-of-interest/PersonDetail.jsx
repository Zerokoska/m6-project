function PersonDetail({person}){
console.log(person);

    return(
        <div>
            <h3>{person && person.name}</h3>
            Age: {person && person.age} <br />
            Death: {person && person.died} <br />
            Nationality: {person && person.nationality} <br />
            Status: {person && person.status_text} <br />
            
        </div>
    )
}

export default PersonDetail;