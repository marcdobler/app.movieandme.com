import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Navigation from './Navigation/Navigation'
import Store from './Store/configurerStore'

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigation />
      </Provider>
    )
  }
}
