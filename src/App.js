import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import { inherits } from 'util';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Michael', age: '23' },
      { id: '2', name: 'Jc', age: '55' },
      { id: '3', name: 'Alyssa', age: '26' }
    ],
    otherState: 'Some other value',
    showPersons: false
  };

  // switchNameHandler = (newName) => {
  //   // console.log("Was Clicked")
  //   // Dont Do This: this.state.persons[0].name = 'Michael'
  //   this.setState({
  //     persons: [
  //       { name: newName, age: '24' },
  //       { name: 'Jc', age: '55' },
  //       { name: 'Alyssa', age: '26' }
  //     ]
  //   });
  // };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = () => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person 
              click={this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age} 
              key={person.id} 
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
          {/* <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Michael!')}
            changed={this.nameChangedHandler}>Hobby: Sports</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/> */}
        </div>
      );

      style.backgroundColor = 'red';
    };

    return (
      <div className="App">
        <h1>Hi, I'm A React App!</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
        {/* { this.state.showPersons === true ?
        <div >
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Michael!')}
            changed={this.nameChangedHandler}>Hobby: Sports</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
        </div> : null
         } */}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Does this work now?"));
  };
};

export default App;
