import React, { Component } from 'react';
import './App.scss';
import TodoList from "./TodoList";
import ListsList from './ListsList'
import base from './base';

class App extends Component {
  state = {
    lists: {
      deleted: {
        listName: 'Deleted',
        items: {}
      },
      default: {
        listName: 'default',
        items: {}
      },
      done: {
        listName: 'DONE',
        items: {}
      }
    },
    currentList: 'default'
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
    this.props.history.push(`/list/${key}`);
    console.log(this.state);
  };

  updateListName = (key, value) => {
    console.log("updating list");
    var newState = {...this.state};
    newState.lists[key].listName = value;
    this.setState(newState);
  }

  deleteList = (listId, key) => {
    let { lists } = this.state;

    // Move items from the list to the deleted list
    lists['deleted'].items = Object.assign(lists['deleted'].items || {}, {...lists[listId].items});

    lists[listId] = null;

    if (lists === undefined) {
      lists = {}
    }

    this.setState({ lists });
  };

  addItem = (listId, newItemName, key = null) => {
    console.log("add item");
    console.log(listId, newItemName);
    let lists = {...this.state.lists};

    if (!lists[listId].items) {
      lists[listId].items = {};
    }

    let newKey = key ? key :  `item${Date.now()}`

    lists[listId].items[newKey] = newItemName;

    this.setState({ lists });
  };

  deleteItem = (listId, key) => {
    var { lists } = this.state;

    if (listId !== 'deleted') {
      if (!lists['deleted'].items) {
        lists['deleted'].items = {}
      }

      lists['deleted'].items[key] = {...lists[listId].items[key]};
    }

    lists[listId].items[key] = null;

    if (lists[listId].items === undefined) {
      lists[listId].items = {}
    }

    this.setState({ lists });
  };

  updateItem = (listId, key, value) => {
    var { lists } = this.state;

    lists[listId].items[key] = value;

    this.setState({ lists });
  }

  moveItemToList = (fromListId, key, toListId) => {
    var { lists } = this.state;

    let value = lists[fromListId].items[key];

    this.addItem(toListId, value, key);
    this.deleteItem(fromListId, key);
  }

  componentDidMount = () => {
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
        <ListsList lists={this.state.lists} addList={this.addList} setCurrentList={this.setCurrentList} activeList={this.state.currentList} updateListName={this.updateListName} deleteList={this.deleteList}/>
        <TodoList list={this.state.lists[this.state.currentList]} addItem={this.addItem} deleteItem={this.deleteItem} listId={this.state.currentList}  updateItem={this.updateItem} moveItemToList={this.moveItemToList}/>
      </div>
    );
  }
}

export default App;
