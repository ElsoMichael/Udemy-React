import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log("[Persons.js] Inside Constructor", props);
  }

  componentWillMount() {
    console.log('[Persons.js] Inside ComponentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[Update Persons.js] Inside component will recive props');
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Udate Persons.js] Inside should component update');
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Udate Persons.js] Inside component will udate');
  }

  render() {
    return (
      this.props.persons.map((person, index) => {
        return <Person 
          click={this.props.click(index)} 
          name={person.name} 
          age={person.age} 
          key={person.id} 
          changed={(event) => this.props.changed(event, person.id)} />
      })
    )
  }
}

export default Persons;