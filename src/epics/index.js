import { combineEpics } from 'redux-observable'

import pingEpic from './ping'
import loadStoriesEpic from './stories'
import fetchUserEpic from './user'
import searchBeersEpic from './beers'

const rootEpic = combineEpics(
  pingEpic,
  loadStoriesEpic,
  fetchUserEpic,
  searchBeersEpic
)

export default rootEpic
