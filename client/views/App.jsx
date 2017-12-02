import React, { Component } from 'react'
import {
  Link,
} from 'react-router-dom'
import Routes from '../config/router'

class App extends Component {
  render() {
    return [
      <div key="banner">
        <Link to="/">首頁</Link>
        <br />
        <Link to="/detail">詳細頁</Link>
      </div>,
      <Routes key="routes" />,
    ]
  }
}

export default App;
