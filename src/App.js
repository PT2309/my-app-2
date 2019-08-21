import React, { Component } from 'react';
import Person from './components/Person';
import AddPerson from './components/AddPerson';

class App extends Component{
  state = {
    superheroes : [
      { name: "Superman", age: "325", location: "Krypton", id: 1 },
      { name: "Batman", age: "40", location: "Gotham", id: 2 },
      { name: "Wonder Woman", age: "400", location: "Amazon", id: 3 }
    ]
  }

  render(){
    return (
      <div className="App">
        <h1>This is my first create-react-app</h1>
        <Person superheroes={this.state.superheroes} />
        <AddPerson />
      </div>
    );
  }  
}

export default App;
