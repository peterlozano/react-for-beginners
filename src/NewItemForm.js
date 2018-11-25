import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './NewItemForm.scss';

class NewItemForm extends Component {
  newItemName = React.createRef();

  addItem = (e) => {
    e.preventDefault();
    this.props.addItem(this.props.listId, this.newItemName.current.value);
    this.newItemName.current.value = '';
  };

  render() {
    return (
      <div className="newItemForm">
        <form onSubmit={this.addItem}>
          <label>Add Item:</label>
          <input type="text" ref={this.newItemName} className="newItemInput" name="newItemTitle"/>
        </form>
      </div>
    );
  }
}

NewItemForm.propTypes = {
  addItem: PropTypes.func,
  listId: PropTypes.string
};

export default NewItemForm;