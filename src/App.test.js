import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
// import 'rxjs'

import App from './App'

import configureStore from './configureStore'

/*
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0)
}
*/

const store = configureStore()

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(
    <Provider store={ store }>
      <div>
        <App />
      </div>
    </Provider>, div)
})
