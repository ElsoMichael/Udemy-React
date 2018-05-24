import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../hoc/WithClass';


class Person extends Component {
  render() {
    return(
      <withClass classes={classes.Person}>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} year's old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </withClass>
    )
  }
}

export default Person;