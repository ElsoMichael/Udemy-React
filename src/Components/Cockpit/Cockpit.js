import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {

  const assiagnedClasses = [];
  let btnClass = classes.Button;
  
  if (props.showperson) {
    btnClass = [classes.Button, classes.red].join(' ');
  }

  if (props.persons.length <= 2) {
    assiagnedClasses.push(classes.red); // class = ['red'];
  }
  if (props.persons.length <= 1) {
    assiagnedClasses.push(classes.bold); // class = ['red', 'bold'];
  }

  return(
    <Aux>
      <h1>{ props.appTitle }</h1>
      <p className={assiagnedClasses.join(' ')}>This is really working!</p>
      <button 
        className={btnClass}
        onClick={this.togglePersonHandler}>Toggle Persons
      </button>
    </Aux>
  )
}

export default cockpit;