import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TodoItem.scss';

class TodoItem extends Component {
  deleteItem = (e) => {
    console.log(this.props.title);
    this.props.deleteItem(this.props.title);
  };

  render() {
    return (
      <div className="todoItem">
        <b>{this.props.title}</b>
        <b onClick={this.deleteItem} className="deleteItem">X</b>
      </div>
    );
  }
}

TodoItem.propTypes = {
  title: PropTypes.string,
  deleteItem: PropTypes.func
};

export default TodoItem;