import React, { PureComponent } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import { inherits } from 'util';
import ErrorBoundry from './ErrorBoundry/ErrorBoundry'
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[App.js] Inside Constructor", props);
  }

  componentWillMount() {
    console.log('[App.js] Inside ComponentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Udate App.js] Inside component will udate');
  }


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
    console.log('[App.js] Inside render()');
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
      <withClass classes={classes.App}> 
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler} />
        {persons}
      </withClass>
    );
  };
};

export default App;
