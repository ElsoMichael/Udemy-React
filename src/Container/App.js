import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import { inherits } from 'util';
import ErrorBoundry from './ErrorBoundry/ErrorBoundry'
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id // p.userID === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value; // event.input.value

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = () => {
    const persons = [...this.state.persons];
    this.setState({persons: persons})
  }

  render() {
    let btnClass = '';

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons
            persons={this.state.persons}
            click={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
      );
    };

    return (
      <div className={classes.App}> 
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons} />
        {persons}
      </div>
    );
  };
};

export default App;
