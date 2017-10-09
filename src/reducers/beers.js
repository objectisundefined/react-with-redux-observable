import { SEARCHED_BEERS, RECEIVED_BEERS, SEARCHED_BEERS_ERROR } from '../actions'

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
        loading: true,
        messages: [],
      }

    case RECEIVED_BEERS:
      return {
        beers: action.payload,
        loading: false,
        messages: [],
      }

    case SEARCHED_BEERS_ERROR:
      return {
        ...state,
        loading: false,
        messages: [{ type: 'error', text: action.payload }],
      }

    default:
      return state
  }
}

export default beersReducer
