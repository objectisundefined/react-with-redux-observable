import { Observable } from 'rxjs'

import { SEARCHED_BEERS, receiveBeers, searchBeersError } from '../actions'

const beers = `https://api.punkapi.com/v2/beers`

const search= term => `${beers}?beers_name=${encodeURIComponent(term)}`

const ajax = term =>
  term === 'skull'
  ? Observable.throw(new Error('Ajax failed!'))
  : Observable.ajax.getJSON(search(term))

const searchBeersEpic = action$ =>
  action$.ofType(SEARCHED_BEERS)
    .debounceTime(500)
    .switchMap(({ payload }) =>
      ajax(payload)
        .map(receiveBeers)
        .catch(err => Observable.of(searchBeersError(err)))
  )

export default searchBeersEpic 
