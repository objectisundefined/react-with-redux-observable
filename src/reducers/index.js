import { combineReducers } from 'redux'

import storiesReducer from './stories'
import todosReducer from './todos'
import pingReducer from './ping'
import userReducer from './user'
import beersReducer from './beers'

export default combineReducers({
  stories: storiesReducer,
  todos: todosReducer,
  ping: pingReducer,
  user: userReducer,
  beers: beersReducer,
})
