import * as React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import makeServer from './services/serverFinal'

if (
  process.env.NODE_ENV === 'development' &&
  typeof makeServer === 'function'
) {
  makeServer()
} else if (
  process.env.NODE_ENV === 'production' ||
  process.env.REACT_APP_DEMO
) {
  makeServer()
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
