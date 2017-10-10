import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"

// import 'rxjs'

import './index.css'
import App from './App'

import registerServiceWorker from './registerServiceWorker'

import configureStore/*, { DevTools }*/ from './configureStore'

const store = configureStore()

ReactDOM.render(
  <Provider store={ store }>
    <div>
      <App />
      {/* {<DevTools />} */}
    </div>
  </Provider>
  , document.getElementById('root'))

registerServiceWorker()
