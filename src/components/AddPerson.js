import React, { Component } from 'react';

class AddPerson extends Component {
    state = {
        name: null,
        age: null,
        location: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Current State", this.state)
        console.log(this.props.addSupe(this.state));
    }

    render(){
        return(
            <div className="person-details">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label htmlFor="age">Age: </label>
                    <input type="text" id="age" onChange={this.handleChange} />
                    <label htmlFor="location">Location: </label>
                    <input type="text" id="location" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddPerson;