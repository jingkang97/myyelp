import React, { Component } from "react";

class Counter extends Component {
    state = {
        count:0
    };
// can be any name
styles = {
    fontSize: 10,
    fontWeight: "bold"
};

    render() {
        let classes = "badge m-2 badge";
        classes += (this.state.count === 0) ? "warning" : "primary";
    return (
      <div>
          {/* can write valid javascript expression {}*/}
          {/* className as class is reserved word for JS */}
          {/* styling in span */}
        {/* <span style = {this.styles} className = "badge badge-primary m-2">{this.formatCount()}</span> */}
        <span style = {{fontSize:30}} className = "badge badge-warning m-2">{this.formatCount()}</span>
        <button className = "btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }
    formatCount(){
        // Must be count
        const {count} = this.state
        return this.state.count === 0 ? <h1>Zero</h1>: count;
    }
}






export default Counter;
