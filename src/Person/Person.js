import React from 'react';
import classes from './Person.css';


const person = (props) => {
  const rnd = Math.random();

    if (rnd > 0.7) {
      throw new Error("Something Went Wrong");
    }
    
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} year's old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default person;