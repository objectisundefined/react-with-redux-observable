import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import 'rxjs'

import './index.css';
import App from './App';

import rootReducer from './reducers';
import rootEpic from './epics'

import registerServiceWorker from './registerServiceWorker';

// import { createDevTools } from 'redux-devtools';
// import LogMonitor from 'redux-devtools-log-monitor';
// import DockMonitor from 'redux-devtools-dock-monitor';

const epicMiddleware = createEpicMiddleware(rootEpic);

/*
const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey='ctrl-h'
    changePositionKey='ctrl-q'
  >
    <LogMonitor />
  </DockMonitor>
);
*/

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(createLogger(), epicMiddleware) /*, DevTools.instrument(), */)
  )

  /*
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }
  */

  return store
}

ReactDOM.render(
  <Provider store={ configureStore() }>
    <div>
      <App />
      {/* <DevTools /> */}
    </div>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
