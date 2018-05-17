import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  render() {
    return (
      props.persons.map((person, index) => {
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