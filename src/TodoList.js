import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";
import './TodoList.scss';
import NewItemForm from "./NewItemForm";

class TodoList extends Component {
  render() {
    return (
      <div className="todoList">
        {Object.keys(this.props.items).map((key) => {
          let title = this.props.items[key];
          return <TodoItem key={key} id={key} title={title} deleteItem={this.props.deleteItem}/>
          }
        )}
        <NewItemForm addItem={this.props.addItem}/>
      </div>
    );
  }
}

TodoList.propTypes = {
  items: PropTypes.object,
  addItem: PropTypes.func,
  deleteItem: PropTypes.func
};

export default TodoList;