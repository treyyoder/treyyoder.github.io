import React from "react";
import Bar from "./Bar";
import "./App.css";

export default class App extends React.Component {
  state = {
    value:null,
    intervalId: null,
    count:0,
    items:[]
  };

  randomInteger(max) {
    return Math.floor(Math.random() * (max - 1));
  }

  handleClick = () => {
    var intervalId = setInterval(this.sort, 10);
    this.setState({ intervalId });
  };

  handleGenClick = () => {
     var items = [];

    for (var i = 0; i<500; i++){
      items.push(this.randomInteger(500));
      //this.items.push(<Bar value={90} />);
    }
    this.setState({ items });
  };

  sort = () => {
    console.log(this.state.count);
    this.setState({count: this.state.count + 1});
    this.performSort();
    if(this.state.count==200){
      clearInterval(this.state.intervalId);
      this.setState({count: 0});
    }
  }

  performSort = () => {
    let items = this.state.items;
    for (var i = 0 ; i<items.length ;i++ ){
      if(i == 0)
        continue;
      if (items[i] < items[i-1]){
        var temp = items[i-1];
        items[i-1] = items[i];
        items[i] = temp;
        this.setState({ items });
        //return;
      }
    }
  }

  render() {
    var rendItems = [];
    for (var i = 0 ; i < this.state.items.length; i++){
      rendItems.push(<Bar value={this.state.items[i]} />);
    }
    return (
      <div className="component-app">
        <button onClick={this.handleClick}>Sort</button>
        <button onClick={this.handleGenClick}>Generate a new Set to Sort</button>
        {rendItems}
      </div>
    );
  }
}
