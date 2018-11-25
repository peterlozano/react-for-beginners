import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewList.scss';

class NewList extends Component {
  newListName = React.createRef();

  addList = (e) => {
    e.preventDefault();
    this.props.addList(this.newListName.current.value);
    this.newListName.current.value = '';
  };

  render() {
    return (
      <div className="newListForm">
        <form onSubmit={this.addList}>
          <label>New List Name:</label>
          <input type="text" ref={this.newListName} className="newListInput" name="newListTitle"/>
        </form>
      </div>
    );
  }
}

NewList.propTypes = {
  addList: PropTypes.func
}

export default NewList