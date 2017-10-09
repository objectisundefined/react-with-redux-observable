export const LOAD_STORIES = 'LOAD_STORIES'
export const CLEAR_STORIES = 'CLEAR_STORIES'
export const NEW_ITEM = 'NEW_ITEM'
export const UPDATE_ITEM_TEXT = 'UPDATE_ITEM_TEXT'

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const PING = 'PING'
export const PONG = 'PONG'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

let nextTodoId = 0

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const ping = () => ({ type: PING })

export const loadStories = () => ({ type: LOAD_STORIES })
export const clear = () => ({ type: CLEAR_STORIES })

export const FETCH_USER = 'FETCH_USER'
export const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED'

export const fetchUserAction = login => {
  return {
    type: FETCH_USER,
    payload: login
  }
}

export const fetchUserFulfilledAction = user => {
  return {
    type: FETCH_USER_FULFILLED,
    payload: user
  }
}

export const FETCH_STORIES = 'FETCH_STORIES'
export const FETCH_STORIES_FULFILLED = 'FETCH_STORIES_FULFILLED'

export const fetchStoriesAction = (count = 5) => {
  return {
    type: FETCH_STORIES,
    payload: count
  }
}

export const fetchStoriesFulfilledAction = stories => {
  return {
    type: FETCH_STORIES_FULFILLED,
    payload: stories
  }
}

export const SEARCHED_BEERS = 'SEARCHED_BEERS'
export const RECEIVED_BEERS = 'RECEIVED_BEERS'
export const SEARCHED_BEERS_LOADING = 'SEARCHED_BEERS_LOADING'
export const SEARCHED_BEERS_ERROR = 'SEARCHED_BEERS_ERROR'
export const CANCEL_SEARCH = 'CANCEL_SEARCH'

export const searchBeers = query => {
  return {
    type: SEARCHED_BEERS,
    payload: query
  }
}

export const receiveBeers = beers => {
  return {
    type: RECEIVED_BEERS,
    payload: beers
  }
}

export const searchBeersLoading = loading => {
  return {
    type: SEARCHED_BEERS_LOADING,
    payload: loading
  }
}

export const searchBeersError = err => {
  return {
    type: SEARCHED_BEERS_ERROR,
    payload: err.message
  }
}

export const cancelSearch = () => ({ type: CANCEL_SEARCH })
