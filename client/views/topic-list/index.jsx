import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  observer,
  inject,
} from 'mobx-react'
import { AppState } from '../../store/app-state'

@inject('appState') @observer

class TopicList extends Component {
  changeName = (event) => {
    this.props.appState.changeName(event.target.value)
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.changeName} />
        <span>{this.props.appState.msg}</span>
      </div>
    );
  }
}

TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState),
}

export default TopicList;
