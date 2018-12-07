import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'max', age: 28 },
      { name: 'manu', age: 20 },
      { name: 'john', age: 32 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // console.log('was clicked!');
    // alert('was clicked!');
    // Don'n do this: 'this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'manu', age: 20 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  render() {
    const persons = this.state.persons.map(
      person => {
        return <Person name={person.name} age={person.age} />;
      }
    );

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        { persons }
        {// <Person name={this.state.persons[0].name} age={this.state.persons[0].name}/>
        }
        {// <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        }
        {// <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        }
      </div>
    );
  }
}

export default App;
