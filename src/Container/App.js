import React, { PureComponent } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import { inherits } from 'util';
import ErrorBoundry from './ErrorBoundry/ErrorBoundry'
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

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

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[Udate App.js] Inside getDerivedStateFromProps', nextProps, prevState);

    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log('[Udate App.js] Inside getSnapshotBeforeUpdate');
  }

  state = {
    persons: [
      { id: '1', name: 'Michael', age: '23' },
      { id: '2', name: 'Jc', age: '55' },
      { id: '3', name: 'Alyssa', age: '26' }
    ],
    otherState: 'Some other value',
    showPersons: false,
    toggleClicked: 0
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
    this.setState( (prevState, props) => {
      return {showPersons: !doesShow, 
        toggleClicked: prevState.toggleClicked + 1}
    });
  }

  deletePersonHandler = () => {
    const persons = [...this.state.persons];
    this.setState({persons: persons})
  }

  loginHandler = () => {
    this.setState({authenticated: true});
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
            changed={this.nameChangedHandler}
            isAuthenticated={this.stateAuthenticated} />
      );
    };

    return (
      <Aux classes={classes.App}> 
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          login={this.loginHandler}
          authenticated={this.props.isAuthenticated}
          clicked={this.togglePersonHandler} />
          <AuthContext.Provider value={this.state.authenticated}>
          {persons}
          </AuthContext.Provider>
      </Aux>
    );
  };
};

export default withClass(App, classes.App);
