import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TodoItem.scss';

class TodoItem extends Component {
  state = {
    editing: false
  };

  myValue = React.createRef();

  deleteItem = (e) => {
    this.props.deleteItem(this.props.listId, this.props.id);
  };

  submitEditForm = (e) => {
    e.preventDefault();
    console.log("saving item");
    this.setState({editing: false});
    this.props.updateItem(this.props.listId, this.props.id, this.myValue.current.value);
  }

  startEdit = (e) => {
    this.setState({editing: true});
  }

  moveToDone = (e) => {
    this.props.moveItemToList(this.props.listId, this.props.id, 'done');
  }

  render() {
    return (
      <div className="todoItem">
        {this.state.editing ? (
          <div className="itemEditForm">
            <form onSubmit={this.submitEditForm}>
              <input autoFocus={true} ref={this.myValue} type="text" onBlur={this.submitEditForm} name="itemEditName" defaultValue={this.props.title}/>
            </form>
          </div>
        ) : (
          <div>
            {this.props.listId !== 'done' ? (<b onClick={this.moveToDone} className="doneIcon">DONE</b>) : null}
            <b onClick={this.startEdit}>{this.props.title}</b>
            <b onClick={this.deleteItem} className="deleteIcon">X</b>
          </div>
        )}
      </div>
    );
  }
}

TodoItem.propTypes = {
  title: PropTypes.string,
  deleteItem: PropTypes.func,
  listId: PropTypes.string,
  updateItem: PropTypes.func,
  moveItemToList: PropTypes.func
};

export default TodoItem;