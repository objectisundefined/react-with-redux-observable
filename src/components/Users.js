import React from 'react'
import { connect } from 'react-redux'

import User from './User'
import { fetchUserAction } from '../actions'

const Users = props =>
  <div>
    <ul>
      { props.users.map(login =>
          <li key={ login }>
            { login }
            <button type="button" onClick={ () => props.loadUser(login) }>Load user</button>
          </li>
      )}
    </ul>
    { props.loading && <p>Please wait!</p> }
    { props.current && <User { ...props.current } /> }
  </div>

const mapStateToProps = state => state.user

const mapDispatchToProps = dispatch => {
  return {
    loadUser: login => dispatch(fetchUserAction(login))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
