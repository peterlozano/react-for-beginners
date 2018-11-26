import React, { Component } from 'react';
import './App.scss';
import TodoList from "./TodoList";
import ListsList from './ListsList'
import base from './base';

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

    this.updateStorage();
  };

  setCurrentList = (key) => {
    console.log("curent list:" + key);
    this.setState({ currentList: key });
    this.props.history.push(`/list/${key}`);
    console.log(this.state);
  };

  updateListName = (key, value) => {
    console.log("updating list");
    var newState = {...this.state};
    newState.lists[key].listName = value;
    this.setState(newState);
    this.updateStorage();
  }

  addItem = (listId, newItemName) => {
    console.log("add item");
    console.log(listId, newItemName);
    let lists = {...this.state.lists};

    if (!lists[listId].items) {
      lists[listId].items = {};
    }

    lists[listId].items[`item${Date.now()}`] = newItemName;
    this.setState({lists});

    this.updateStorage();
  };

  deleteItem = (listId, key) => {
    var { lists } = this.state;

    lists[listId].items[key] = null;

    if (lists[listId].items === undefined) {
      lists[listId].items = {}
    }

    this.setState({ lists });

    this.updateStorage();
  };

  updateItem = (listId, key, value) => {
    var newItems = this.state.lists[listId].items;

    newItems[key] = value;

    this.setState({ items: newItems });

    this.updateStorage();
  }

  updateStorage = () => {
    //localStorage.setItem('todoAppState', JSON.stringify(this.state));
  }

  componentDidMount = () => {
    /*
    const localStorageRef = localStorage.getItem('todoAppState');

    if (localStorageRef) {
      this.setState(JSON.parse(localStorageRef));
    }
    */

    if (this.props.match.params.listId) {
      let urlKey = this.props.match.params.listId;

      if (this.state.lists[urlKey]) {
        this.setState({currentList: this.props.match.params.listId});
      }
      else {
        this.props.history.push(`/`);
      }
    }

    this.ref = base.syncState('lists', {
      context: this,
      state: 'lists',
    })
  };

  render() {
    return (
      <div className="App">
        <ListsList lists={this.state.lists} addList={this.addList} setCurrentList={this.setCurrentList} activeList={this.state.currentList} updateListName={this.updateListName}/>
        <TodoList list={this.state.lists[this.state.currentList]} addItem={this.addItem} deleteItem={this.deleteItem} listId={this.state.currentList}  updateItem={this.updateItem}/>
      </div>
    );
  }
}

export default App;
