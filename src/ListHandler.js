import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ListHandler.scss';

class ListHandler extends Component {
  state = {
    editing: true
  };

  myValue = React.createRef();

  setCurrentList = (e) => {
    console.log("set current: " + this.props.listId);
    this.props.setCurrentList(this.props.listId);
  };

  startEdit = (e) => {
    this.setState({editing: true});
  }

  submitEditForm = (e) => {
    e.preventDefault();
    console.log("saving list");
    this.setState({editing: false});
    this.props.updateListName(this.props.listId, this.myValue.current.value);
  }

  render () {
    return (
      <div className="listHandler">
        {this.state.editing ? (
          <div className="listEditForm">
            <form onSubmit={this.submitEditForm}>
              <input autoFocus={true} ref={this.myValue} type="text" onBlur={this.submitEditForm} name="listEditName" defaultValue={this.props.list.listName}/>
            </form>
          </div>
        ) : (
          <div
            onClick={this.setCurrentList}
            className={"listName" + (this.props.activeList === this.props.listId ? ' activeList' : '')}
            >
            {this.props.list.listName}&nbsp;
            <b onClick={this.startEdit} className="editList">(Edit)</b>
          </div>
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
  updateListName: PropTypes.func
}

export default ListHandler