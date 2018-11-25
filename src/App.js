import React, { Component } from 'react';
import './App.scss';
import TodoList from "./TodoList";
import ListsList from './ListsList'

class App extends Component {
  state = {
    lists: {
      list1: {
        listName: 'default',
        items: {
          item1: "hola",
          item2: "mundo"
        }
      }
    },
    currentList: 'list1'
  };

  addList = (newListName) => {
    console.log("New List: " + newListName);
    let newLists = {...this.state.lists}
    newLists[`list${Date.now()}`] = {
      items: {
        'item1': 'default item'
      },
      listName: newListName
    };

    this.setState({ lists: newLists });
  };

  setCurrentList = (key) => {
    console.log("curent list:" + key);
    this.setState({ currentList: key });
    console.log(this.state);
  };

  addItem = (listId, newItemName) => {
    console.log("add item");
    console.log(listId, newItemName);
    let lists = {...this.state.lists};
    lists[listId].items[`item${Date.now()}`] = newItemName;
    this.setState({lists})
  };

  deleteItem = (listId, key) => {
    var newItems = this.state.lists[listId].items;

    delete newItems[key];

    this.setState({ items: newItems });
  };

  render() {
    return (
      <div className="App">
        <ListsList lists={this.state.lists} addList={this.addList} setCurrentList={this.setCurrentList} activeList={this.state.currentList} />
        <TodoList list={this.state.lists[this.state.currentList]} addItem={this.addItem} deleteItem={this.deleteItem} listId={this.state.currentList} />
      </div>
    );
  }
}

export default App;
