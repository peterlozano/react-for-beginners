import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewList from './NewList'
import './ListsList.scss';

class ListsList extends Component {
  setCurrentList = (e) => {
    this.props.setCurrentList(e.currentTarget.id);
  };

  render () {
    return (
      <div className="listsList">
        <b>Lists</b>
        {Object.keys(this.props.lists).map((key) => {
          return <div
            onClick={this.setCurrentList}
            id={key}
            className={"listName" + (this.props.activeList === key ? ' activeList' : '')}
            key={key}>
              {this.props.lists[key].listName}
            </div>
        })}
        <NewList addList={this.props.addList}/>
      </div>
    )
  }
}

ListsList.propTypes = {
  lists: PropTypes.object,
  addList: PropTypes.func,
  setCurrentList: PropTypes.func,
  activeList: PropTypes.string
}

export default ListsList