import { Observable } from 'rxjs'
import { VirtualTimeScheduler } from 'rxjs/scheduler/VirtualTimeScheduler'
import { ActionsObservable } from 'redux-observable'

import configureStore from '../configureStore'

import { SEARCHED_BEERS_LOADING, searchBeers, RECEIVED_BEERS } from '../actions'
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

    expect(actions[0].type).toBe(SEARCHED_BEERS_LOADING)
    expect(actions[1].type).toBe(RECEIVED_BEERS)
  })
})

it('should perform a search (redux)', () => {
  const scheduler = new VirtualTimeScheduler()

  const deps = {
    scheduler,
    ajax: {
      getJSON: () => Observable.of([{ name: 'shane' }])
    }
  }

  const store = configureStore(deps)

  const action = searchBeers('shane')

  store.dispatch(action)

  scheduler.flush()
    
  expect(store.getState().beers.beers.length).toBe(1)
})
