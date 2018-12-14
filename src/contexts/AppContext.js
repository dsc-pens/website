import React, { Component, createContext } from 'react'

const defaultContext = {
  pageTitle: 'Hello, world!',
  setPageTitle: pageTitle => {},
}

const ctx = createContext(defaultContext)
const { Consumer, Provider } = ctx

class AppProvider extends Component {
  state = {
    ...defaultContext,
    setPageTitle: pageTitle => this.setState({ pageTitle }),
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { defaultContext, AppProvider, Consumer as AppConsumer }
