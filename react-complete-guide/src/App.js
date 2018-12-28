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

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'test', age: 28 },
        { name: 'test', age: 20 },
        { name: event.target.value, age: 27 },
      ]
    } );
  }

  switchNameHandler = ( newName ) => {
    // Don'n do this: 'this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'manu', age: 20 },
        { name: 'Stephanie', age: 27 },
        { name: newName, age: 100 },
      ]
    } );
  }

  render() {
    // 一つのみonChangeのイベントを発生させたい場合はmapを使わない
    // const persons = this.state.persons.map( person =>
    //                   <Person name={person.name}
    //                           age={person.age}
    //                           changed={this.nameChangeHandler}/> );

    return (
      <div className="App">
        <h1>React App</h1>
        <p>This is really working!</p>
        {
          // <button onClick={() => this.switchNameHandler()}>Switch Name</button>
          // ↓ newNameを渡してstateを更新する場合、bindする必要がある
        }
        <button onClick={this.switchNameHandler.bind(this, 'takumi')}>Switch Name</button>
        {
          // persons
        }
        <Person name={this.state.persons[0].name}
                age={this.state.persons[0].name}
                changed={this.nameChangeHandler} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
