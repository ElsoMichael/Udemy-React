import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm A React App!</h1>
        <p>This is really working!</p>
        <Person name="Michael" age="23"/>
        <Person name="Jc" age="55">Hobby: Sports</Person>
        <Person name="Alyssa" age="26"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Does this work now?"));
  }
}

export default App;
