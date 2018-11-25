import React, { Component } from 'react';
import './App.css';
import TodoList from "./TodoList";

class App extends Component {
  state = {
    items: [
      'hola',
      'mundo'
    ]
  };

  addItem = (newItemName) => {
    var newItems = this.state.items.slice();
    newItems.push(newItemName);
    this.setState({ items: newItems });
  };

  deleteItem = (title) => {
    var newItems = this.state.items.filter((value) => (value !== title));
    console.log(newItems);
    this.setState({ items: newItems });
  };

  render() {
    return (
      <div className="App">
        <TodoList items={this.state.items} addItem={this.addItem} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default App;
