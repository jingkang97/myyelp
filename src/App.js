import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
// import React from 'react';
import React, { Component } from 'react';

// if no parent child component - we need to lift the state up

class App extends Component {
  state = {  
    counters:[
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
    ]
}
handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0; 
        return c;
    });
    this.setState({counters});
}

handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters : counters});
    console.log("Event Handler Called", counterId); 
}

handleIncrement = (counter) => {
    // should not modify state directly
    // clone of the array - so that we have a different object from the one in the state
    // spread attribute which allows an expression to be expanded
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter)
    counters[index] = {...counter};
    // directly modify the value property of this counter object in this state
    counters[index].value++;
    this.setState({counters})
    // console.log(this.state.counters[index]);
    // counters[0] = {...counter};

    console.log(counter)
}
  render() { 
    return ( <React.Fragment>
      <NavBar totalCounters = {this.state.counters.filter(c => c.value > 0).length}/>
    <main className = "container">
      {/* three events that are raised by this component */}
      <Counters 
      counters = {this.state.counters}
      onReset={this.handleReset} 
      onIncrement={this.handleIncrement} 
      onDelete = {this.handleDelete}/>
    </main>
    </React.Fragment> );
  }
}
 
// export default App;


// function App() {

//   return (
    
    
//   );
// }

export default App;
