import React from 'react';
import './person.css'

 const Person = ({ superheroes, deleteSupe }) => {

    // const  { superheroes, deleteSupe }= props;

        const supesList = superheroes.map( supe => {
            return ( supe.age > 10 ? (
                    <div className="person" key={supe.id}>
                        <div>Name: {supe.name}</div>
                        <div>Age: {supe.age}</div>
                        <div>Location: {supe.location}</div>
                        <button onClick={() => {deleteSupe(supe.id)}}>Delete</button>
                    </div>
            ): null )
        });

        return(
            <div className="super-list">
                { supesList }
            </div>
        )
        }


export default Person;