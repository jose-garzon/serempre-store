// ------------------------------ import libraries
import React from 'react'
import ReactDOM from 'react-dom'

// ------------------------------ import components
import { App } from './router'

function render() {
  ReactDOM.render(<App />, document.getElementById('root'))
}

render()

if (module.hot) {
  module.hot.accept('./router', () => render())
}
