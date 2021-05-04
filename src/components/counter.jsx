import React, { Component } from "react";

class Counter extends Component {
    // state = {
    //     // count:0,
    //     // count: this.props.value,
    //     value: this.props.counter.value
    //     // tags : ["tag1", "tag2", "tag3"]
    // };
// React is a tree of components
// props vs state - props include data that we give to a component wheres 
// state includes data that is local or private to that component
// props is read only - can't change 
// single source of state - remove local component - controlled by its parent

// constructor(){
//     // need to call the super for the parent class - component (counter is a child class)
//     super();
//     console.log("Constructor", this);

//     // bind method
//     // functions in javascripts are objects - have properties and methods - bind method
//     // this.handleIncrement.bind(this)

//     this.handleIncrement = this.handleIncrement.bind(this)
// }


// arrow function dont rquire the this keyword - they interhit it 
// can remove constructor and dont need to rebind every handler manually
// handleIncrement = () => {
//     // this.state.count++;
//     this.setState({count: this.state.count + 1})
//     // need setState to tell react state is being updated - dom in sync with virtual dom, dont have to do this with angular - update automatically (monkey patched - changing code at run time)
//     console.log("Increment Clicked", this)

// }

// no access to state property - can be solved using constructor
// handleIncrement(){
//     //obj.method();
//     // function(); - returns reference to window object - but strict mode - returns null
//     // bind method to solve this
//     console.log('Increment Clicked', this);
//     // ^this is referencing the current object
// }

// handleIncrement = product => {
//     console.log(product)
//     this.setState({value: this.state.value+1});
// }

// doHandleIncrement = () => {
//     this.handleIncrement({id:1})
// }
// // onClick = {this.doHandleIncrement}

// handleIncrement = () => {
//     this.setState({value: this.state.value + 1});
// };

styles = {
    fontSize: 10,
    fontWeight: "bold"
};

renderTags(){
    if(this.state.tags.length === 0) return <p>There are no tags</p>
    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
}

// react will schedule a call to the render method, sometime in the future this method is going to be called - asynchronous call
    render() {
         // props - is a property - plain JS object that includes all the attributes that we set in counters component
        console.log("props", this.props)
    return (
        // react element, has children - span, button, etc.
          
      <div>
          {/* can write valid javascript expression {}*/}
          {/* className as class is reserved word for JS */}
          {/* styling in span */}
        {/* <span style = {this.styles} className = "badge badge-primary m-2">{this.formatCount()}</span> */}
        {/* <span style = {{fontSize:30}} className = "badge badge-warning m-2">{this.formatCount()}</span> */}
        <span className = {this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* passing a reference vs target function */}
        {/* <button onClick={this.handleIncrement}className = "btn btn-secondary btn-sm">Increment</button> */}
        <button onClick={()=>this.props.onIncrement()} className = "btn btn-secondary btn-sm">Increment</button>
        {/* <button onClick={()=>this.handleIncrement(product)}className = "btn btn-secondary btn-sm">Increment</button> */}
        {/* <ul> */}
            {/* Unique key cuz of virtual dom - need to uniquely identify each item in this list, what element is changed and where the dom it should make changes */}
            {/* tags might be objects so they could have an Id property -> tag.id */}
            {/* key just have to be unique in this list, not the entire application - can have multiple list */}
            {/* no if and else cuz jsx is not a templating engine */}
            
        {/* </ul> */}
        {/* will show the last part only */}
        {/* {this.state.tags.length === 0 && "Please  create a new tag"} */}
        {/* {this.renderTags()} */}
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className = "btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        // classes += (this.state.count === 0) ? "warning" : "primary";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        // Must be count
        // const {value} = this.state
        const {value} = this.props.counter;
        // return this.state.count === 0 ? <h1>Zero</h1>: count;
        // return this.state.value === 0 ? "Zero": value;
        return value === 0 ? "Zero": value;
    }
}

export default Counter;
