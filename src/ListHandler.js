import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ListHandler.scss';

class ListHandler extends Component {
  state = {
    editing: false
  };

  myValue = React.createRef();

  setCurrentList = (e) => {
    console.log("set current: " + this.props.listId);
    this.props.setCurrentList(this.props.listId);
  };

  startEdit = (e) => {
    if (this.props.listId !== 'default') {
      this.setState({editing: true});
    }
  }

  submitEditForm = (e) => {
    e.preventDefault();
    this.setState({editing: false});
    if (this.myValue.current.value !== '') {
      console.log("saving list");
      this.props.updateListName(this.props.listId, this.myValue.current.value);
    }
  }

  deleteItem = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.setCurrentList('default');
    this.props.deleteList(this.props.listId);
  }

  render () {
    return (
      <div className={"listHandler" + (this.props.activeList === this.props.listId ? ' activeList' : '')} onClick={this.setCurrentList}>
        {this.state.editing ? (
          <div className="listEditForm">
            <form onSubmit={this.submitEditForm}>
              <input autoFocus={true} ref={this.myValue} type="text" onBlur={this.submitEditForm} name="listEditName" defaultValue={this.props.list.listName}/>
            </form>
          </div>
        ) : (
          <React.Fragment>
            <div className="listName">
              {this.props.list.listName}
            </div>
            <b onClick={this.startEdit} className="editList">(Edit)</b>
            {this.props.listId !== 'default' && this.props.listId !== 'done' && this.props.listId !== 'deleted'? (
              <span>
              <b onClick={this.deleteItem} className="deleteIcon">X</b>
              </span>
            ) : null}
          </React.Fragment>
        )}
      </div>
    )
  }
}

ListHandler.propTypes = {
  setCurrentList: PropTypes.func,
  activeList: PropTypes.string,
  list: PropTypes.object,
  listId: PropTypes.string,
  updateListName: PropTypes.func,
  deleteList: PropTypes.func
}

export default ListHandler