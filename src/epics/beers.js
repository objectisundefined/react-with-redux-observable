import { Observable } from 'rxjs'

import { SEARCHED_BEERS, CANCEL_SEARCH, receiveBeers, searchBeersLoading, searchBeersError } from '../actions'

const beers = `https://api.punkapi.com/v2/beers`

const search= term => `${beers}?beers_name=${encodeURIComponent(term)}`

const ajax = term =>
  term === 'skull'
  ? Observable.throw(new Error('Ajax failed!'))
  : Observable.ajax.getJSON(search(term))

const searchBeersEpic = action$ =>
  action$.ofType(SEARCHED_BEERS)
    .debounceTime(500)
    .filter(action => !!action.payload)
    .switchMap(({ payload }) => {
      const loading = Observable.of(searchBeersLoading(true))

      const request = ajax(payload)
        .takeUntil(action$.ofType(CANCEL_SEARCH))
        .map(receiveBeers)
        .catch(err => Observable.of(searchBeersError(err)))

      return Observable.concat(
        loading,
        request
      )
    }
  )

export default searchBeersEpic 
