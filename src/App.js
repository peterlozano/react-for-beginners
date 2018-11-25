import React, { Component } from 'react';
import './App.css';
import TodoList from "./TodoList";

class App extends Component {
  state = {
    items: {}
  };

  addItem = (newItemName) => {
    let newItems = {...this.state.items}
    newItems[`item${Date.now()}`] = newItemName;
    this.setState({ items: newItems });
  };

  deleteItem = (key) => {
    var newItems = this.state.items;

    delete newItems[key];

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
