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

  addSupe = (superhero) => {
    superhero.id = Math.random();
    let superheroes = [...this.state.superheroes, superhero];
    this.setState({
      superheroes : superheroes
    })
  }

  deleteSupe = (id) => {

    let newSuperhereos = this.state.superheroes.filter( supe => {
        return supe.id !== id
    });

    this.setState({
      superheroes: newSuperhereos
    })

  }

  componentDidMount(){
    console.log("Component Mounted!!!")
  }

  componentDidUpdate(prevProps, prevState){
    console.log("Inside Component Update");
    console.log("Prev State", prevState, "Current State", this.state);
    console.log(prevProps);
  }

  componentWillUnmount(){
    console.log("Unmounting  this component");
  }

  render(){
    console.log("Inside App Render Function!!!!");
    return (
      <div className="App">
        <h1>This is my first create-react-app</h1>
        <Person superheroes={this.state.superheroes} deleteSupe={this.deleteSupe} />
        <AddPerson addSupe={this.addSupe}/>
      </div>
    );
  }  
}

export default App;
