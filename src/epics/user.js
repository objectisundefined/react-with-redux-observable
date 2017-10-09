import { Observable } from 'rxjs'

import { FETCH_USER, fetchUserFulfilledAction } from '../actions'

const fetchUserEpic = action$ =>
  action$.ofType(FETCH_USER)
    .switchMap(({ payload }) => Observable.ajax.getJSON(`https://api.github.com/users/${payload}`))
      .map(fetchUserFulfilledAction)

export default fetchUserEpic
