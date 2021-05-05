import React, { Component } from 'react';
import Counter from './counter'

// parent child component between counters (parent) and counter 

class Counters extends Component {
    // state = {  
    //     counters:[
    //         {id: 1, value: 4},
    //         {id: 2, value: 0},
    //         {id: 3, value: 0},
    //         {id: 4, value: 0},
    //     ]
    // }
    // handleReset = () => {
    //     const counters = this.state.counters.map(c => {
    //         c.value = 0; 
    //         return c;
    //     });
    //     this.setState({counters});
    // }

    // handleDelete = (counterId) => {
    //     const counters = this.state.counters.filter(c => c.id !== counterId);
    //     this.setState({counters : counters});
    //     console.log("Event Handler Called", counterId); 
    // }

    // handleIncrement = (counter) => {
    //     // should not modify state directly
    //     // clone of the array - so that we have a different object from the one in the state
    //     // spread attribute which allows an expression to be expanded
    //     const counters = [...this.state.counters];
    //     const index = counters.indexOf(counter)
    //     counters[index] = {...counter};
    //     // directly modify the value property of this counter object in this state
    //     counters[index].value++;
    //     this.setState({counters})
    //     // console.log(this.state.counters[index]);
    //     // counters[0] = {...counter};

    //     console.log(counter)
    // }

    render() { 
        return (<div> 
            {/* pass down using props */}
            {/* not handling, simply bubbling it up to the parent of this component */}
            <button onClick = {this.props.onReset} className = "btn btn-primary btn-sm m-2">Reset</button>
            {/* key used internally by react so we can't use it , hence id as a prop and then read it via this*/}
            {/* {this.state.counters.map(counter => <Counter key = {counter.id} id = {counter.id} value = {counter.value} onDelete = {this.handleDelete}/>)} */}
            {this.props.counters.map(counter => <Counter key = {counter.id} counter = {counter} onDelete = {this.props.onDelete} onIncrement = {this.props.onIncrement}/>)}
        </div> );
    }
}
 
export default Counters;