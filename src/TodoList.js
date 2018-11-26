import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";
import './TodoList.scss';
import NewItemForm from "./NewItemForm";

class TodoList extends Component {
  render() {
    let { listName, items } = this.props.list;

    return (
      <div className="todoList">
        <div className="listName">List Name: {listName}</div>
        <div className="listItems">
          {(items && Object.keys(items).length) ?
            Object.keys(items).map((key) => {
              return items[key] ?
                 <TodoItem key={key} id={key} title={items[key]} deleteItem={this.props.deleteItem} listId={this.props.listId} updateItem={this.props.updateItem} />
              : null;
            }) : <div>This list is empty.</div>}
        </div>
        <NewItemForm addItem={this.props.addItem} listId={this.props.listId}/>
      </div>
    );
  }
}

TodoList.propTypes = {
  listId: PropTypes.string,
  list: PropTypes.shape({
    items: PropTypes.object,
    listName: PropTypes.string
  }),
  addItem: PropTypes.func,
  deleteItem: PropTypes.func,
  updateItem: PropTypes.func
};

export default TodoList;