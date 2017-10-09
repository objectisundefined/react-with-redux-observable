import { Observable } from 'rxjs'

import { FETCH_STORIES, fetchStoriesFulfilledAction } from '../actions'


const topStories = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
const url = id => `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`

const fetchStoriesEpic = action$ =>
  action$.ofType(FETCH_STORIES)
    .switchMap(({ payload }) =>
      Observable.ajax.getJSON(topStories)
        // slice first 5 ids
        .map(ids => ids.slice(0, 5))
        // convert ids -> urls
        .map(ids => ids.map(url))
        // convert urls -> ajax
        .map(urls => urls.map(url => Observable.ajax.getJSON(url)))
        // execute 5 ajax requests
        .mergeMap(reqs => Observable.forkJoin(reqs))
        // results -> store
        .map(fetchStoriesFulfilledAction)
    )

export default fetchStoriesEpic
