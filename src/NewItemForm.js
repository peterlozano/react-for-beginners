import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './NewItemForm.scss';

class NewItemForm extends Component {
  newItemName = React.createRef();

  addItem = (e) => {
    e.preventDefault();
    this.props.addItem(this.newItemName.current.value);
    this.newItemName.current.value = '';
  };

  render() {
    return (
      <div className="newItemForm">
        <form onSubmit={this.addItem}>
          <input type="text" ref={this.newItemName} className="newItemInput" name="newItemTitle"/>
        </form>
      </div>
    );
  }
}

NewItemForm.propTypes = {
  addItem: PropTypes.func
};

export default NewItemForm;