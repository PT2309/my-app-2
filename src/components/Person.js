import React from 'react';
import './person.css'

 const Person = (props) => {

    const { superheroes } = props;

        const supesList = superheroes.map( supe => {
            return ( supe.age > 300 ? (
                    <div className="person" key={supe.id}>
                        <div>Name: {supe.name}</div>
                        <div>Age: {supe.age}</div>
                        <div>Location: {supe.location}</div>
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