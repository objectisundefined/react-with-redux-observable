import { PING, PONG } from '../actions'

const pingEpic = action$ =>
  action$.ofType(PING)
    .delay(1000)
    .mapTo({ type: PONG })

export default pingEpic
