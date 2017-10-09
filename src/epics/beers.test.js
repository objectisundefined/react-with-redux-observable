import { Observable } from 'rxjs'
import { ActionsObservable } from 'redux-observable'

import { SEARCH_BEERS, searchBeers, RECEIVED_BEERS } from '../actions'
import searchBeersEpic from './beers'

it('should perform a search', () => {
  const action$ = ActionsObservable.of(searchBeers('shane'))

  const deps = {
    ajax: {
      getJSON: () => Observable.of([{ name: 'shane' }])
    }
  }

  const output$ = searchBeersEpic(action$, null, deps)

  output$.toArray().subscribe(actions => {
    expect(actions.length).toBe(2)

    expect(actions[0].type).toBe(SEARCH_BEERS)
    expect(actions[1].type).toBe(RECEIVED_BEERS)
  })
})