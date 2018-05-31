import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[Persons.js] Inside Constructor", props);
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() {
    console.log('[Persons.js] Inside ComponentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()');
    this.lastPersonRef.current.focus();
  }

  componentWillReceiveProps(nextProps) {
    console.log('[Update Persons.js] Inside component will recive props');
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
          position={index}
          age={person.age} 
          key={person.id} 
          changed={(event) => this.props.changed(event, person.id)}
          forwardedRef={this.lastPersonRef} />
      })
    )
  }
}

export default Persons;