import React from 'react';
import Classes from './Cockpit.css';

const cockpit = (props) => {

  const assiagnedClasses = [];
  let btnClass = '';
  
  if (props.showperson) {
    btnClass = classes.red;
  }

  if (props.persons.length <= 2) {
    assiagnedClasses.push(classes.red); // class = ['red'];
  }
  if (props.persons.length <= 1) {
    assiagnedClasses.push(classes.bold); // class = ['red', 'bold'];
  }

  return(
    <div>
      <h1>Hi, I'm A React App!</h1>
      <p className={assiagnedClasses.join(' ')}>This is really working!</p>
      <button 
        className={btnClass}
        onClick={this.togglePersonHandler}>Toggle Persons
      </button>
    </div>
  )
}

export default cockpit;