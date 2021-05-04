import React, { Component } from "react";

class Counter extends Component {
    state = {
        count:0,
        tags : ["tag1", "tag2", "tag3"]
    };
// can be any name

handleIncrement(){
    console.log('Increemnt Clicked');
}

styles = {
    fontSize: 10,
    fontWeight: "bold"
};

renderTags(){
    if(this.state.tags.length === 0) return <p>There are no tags</p>
    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
}

    render() {
    return (
      <div>
          {/* can write valid javascript expression {}*/}
          {/* className as class is reserved word for JS */}
          {/* styling in span */}
        {/* <span style = {this.styles} className = "badge badge-primary m-2">{this.formatCount()}</span> */}
        {/* <span style = {{fontSize:30}} className = "badge badge-warning m-2">{this.formatCount()}</span> */}
        <span className = {this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* passing a reference vs target function */}
        <button onClick={this.handleIncrement()}className = "btn btn-secondary btn-sm">Increment</button>
        {/* <ul> */}
            {/* Unique key cuz of virtual dom - need to uniquely identify each item in this list, what element is changed and where the dom it should make changes */}
            {/* tags might be objects so they could have an Id property -> tag.id */}
            {/* key just have to be unique in this list, not the entire application - can have multiple list */}
            {/* no if and else cuz jsx is not a templating engine */}
            
        {/* </ul> */}
        {/* will show the last part only */}
        {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()}
      </div>
    );
  }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        // Must be count
        const {count} = this.state
        // return this.state.count === 0 ? <h1>Zero</h1>: count;
        return this.state.count === 0 ? "Zero": count;
    }
}

export default Counter;
