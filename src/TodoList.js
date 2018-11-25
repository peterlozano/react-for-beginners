import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";
import './TodoList.scss';
import NewItemForm from "./NewItemForm";

class TodoList extends Component {
  render() {
    return (
      <div className="todoList">
        {this.props.items.map((title) =>
          <TodoItem key={title} title={title} deleteItem={this.props.deleteItem} />
        )}
        <NewItemForm addItem={this.props.addItem}/>
      </div>
    );
  }
}

TodoList.propTypes = {
  items: PropTypes.array,
  addItem: PropTypes.func,
  deleteItem: PropTypes.func
};

export default TodoList;