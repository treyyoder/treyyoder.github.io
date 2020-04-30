import React from "react";
import Bar from "./Bar";
import "./App.css";

export default class App extends React.Component {
  state = {
    itemCount: 850,
    value:null,
    intervalId: null,
    count:0,
    items:[]
  };

  randomInteger(max) {
    return Math.floor(Math.random() * (max - 1));
  }

  bubbleSort = () => {
    var intervalId = setInterval(this.performBubbleSort, 10);
    this.setState({ intervalId });
  };

  quickSort = () => {
    //var intervalId = setInterval(this.performQuickSort, 10);
    //this.setState({ intervalId });
    this.performQuickSort();
  };

  handleGenClick = () => {
     var items = [];
    for (var i = 0; i<this.state.itemCount; i++){
      items.push(this.randomInteger(this.state.itemCount));
    }
    this.setState({ items });
  };

  performBubbleSort = () => {
    this.setState({count: this.state.count + 1});
    let items = this.state.items;
    for (var i = 0 ; i<items.length ;i++ ){
      if(i == 0)
        continue;
      if (items[i] < items[i-1]){
        var temp = items[i-1];
        items[i-1] = items[i];
        items[i] = temp;
        this.setState({ items });
      }
    }
    if(this.state.count==this.state.itemCount){
      clearInterval(this.state.intervalId);
      this.setState({count: 0});
    }
  };

  performQuickSort = () => {
    this.setState({count: this.state.count + 1});
    let items = this.state.items;
    items = this.doQuickSort(items, 0, items.length-1);
    this.setState({ items });

    if(this.state.count==this.state.itemCount){
      //clearInterval(this.state.intervalId);
      this.setState({count: 0});
    }
  };

  wait = (ms) => {
    setTimeout(function () {}, ms);
  }

  doQuickSort = (items, left, right) => {
    this.wait(500);
    this.setState({ items });
    var index;
    if (items.length > 1) {
        index = this.partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            this.doQuickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            this.doQuickSort(items, index, right);
        }
    }
    return items;
  }
  swap = (items, leftIndex, rightIndex) => {
      var temp = items[leftIndex];
      items[leftIndex] = items[rightIndex];
      items[rightIndex] = temp;
  }

  partition = (items, left, right) => {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            this.swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
  };

  render(state) {
    var rendItems = [];
    for (var i = 0 ; i < this.state.items.length; i++){
      rendItems.push(<Bar value={this.state.items[i]} />);
    }
    return (
      <div className="component-app">
        <button className="ctrlbtn" onClick={this.quickSort}>Quick Sort</button>
        <button className="ctrlbtn" onClick={this.bubbleSort}>Bubble Sort</button>
        <button className="ctrlbtn" onClick={this.handleGenClick}>Generate Random Set</button>
        {rendItems}
      </div>
    );
  }
}
