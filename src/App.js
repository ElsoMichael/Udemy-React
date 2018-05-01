import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Michael', age: '23' },
      { name: 'Jc', age: '55' },
      { name: 'Alyssa', age: '26' }
    ],
    otherState: 'Some other value'
  }

  switchNameHandler = (newName) => {
    // console.log("Was Clicked")
    // Dont Do This: this.state.persons[0].name = 'Michael'
    this.setState({
      persons: [
        { name: newName, age: '24' },
        { name: 'Jc', age: '55' },
        { name: 'Alyssa', age: '26' }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm A React App!</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Michael!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Michael!')}>Hobby: Sports</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Does this work now?"));
  }
}

export default App;
