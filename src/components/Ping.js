import React from 'react'
import { connect } from 'react-redux'

import { ping } from '../actions'

const Ping = ({ dispatch, isPinging }) =>
  <div>
    <h1>is pinging: { '' + isPinging }</h1>
    <button onClick={ () => dispatch(ping()) } >
      Start PING
    </button>
  </div>

const mapStateToProps = state => {
  return {
    isPinging: state.ping.isPinging
  }
}

export default connect(mapStateToProps)(Ping)
