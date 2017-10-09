import { createStore, compose, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import { ajax } from 'rxjs/observable/dom/ajax'

import rootReducer from './reducers';
import rootEpic from './epics'

// import { createDevTools } from 'redux-devtools';
// import LogMonitor from 'redux-devtools-log-monitor';
// import DockMonitor from 'redux-devtools-dock-monitor';

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

const configureStore = deps => {
  const epicMiddleware = createEpicMiddleware(rootEpic, {
    dependencies: {
      ajax,
      ...deps
    }
  })

  const store = createStore(
    rootReducer,
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

export default configureStore
