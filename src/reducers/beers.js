import {
  SEARCHED_BEERS,
  RECEIVED_BEERS,
  SEARCHED_BEERS_LOADING,
  SEARCHED_BEERS_ERROR,
  CANCEL_SEARCH,
} from '../actions'

const initialState = {
  beers: [],
  loading: false,
  messages: [],
}

const beersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHED_BEERS:
      return {
        ...state,
        messages: [],
      }

    case RECEIVED_BEERS:
      return {
        beers: action.payload,
        loading: false,
        messages: [],
      }

    case SEARCHED_BEERS_LOADING:
      return {
        ...state,
        loading: action.payload,
      }

    case SEARCHED_BEERS_ERROR:
      return {
        ...state,
        loading: false,
        messages: [{ type: 'error', text: action.payload }],
      }

    case CANCEL_SEARCH:
      return {
        ...state,
        loading: false,
      }

    default:
      return state
  }
}

export default beersReducer
