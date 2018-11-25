import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewList from './NewList'
import './ListsList.scss';
import ListHandler from './ListHandler'

class ListsList extends Component {
  render () {
    return (
      <div className="listsList">
        <b>Lists</b>
        {Object.keys(this.props.lists).map((key) => {
          return <ListHandler
            key={key}
            listId={key}
            list={this.props.lists[key]}
            activeList={this.props.activeList}
            setCurrentList={this.props.setCurrentList}
            updateListName={this.props.updateListName} />
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
  activeList: PropTypes.string,
  updateListName: PropTypes.func
}

export default ListsList