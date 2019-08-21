import React, { Component } from 'react';
import './person.css'

class Person extends Component{
    render(){
        // const { name, age , location } = this.props; 
        const { superheroes } = this.props;
        const supesList = superheroes.map( supe => {
           return(
               <div className="person" key={supe.id}>
                    <div>Name: {supe.name}</div>
                    <div>Age: {supe.age}</div>
                    <div>Location: {supe.location}</div>
                </div>
           ) 
        })
        return(
            <div className="super-list">
                { supesList }
            </div>
        )
    }
}

export default Person;