import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import PropTypes from 'prop-types';



class Person extends Component {

  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
    this.inputElement = React.createRef();
  }



  render() {
    return(
      <Aux classes={classes.Person}>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} year's old!</p>
        <p>{this.props.children}</p>
        <input ref={this.inputElement}/>
      </Aux>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);