import React from 'react'

const User = props =>
  <div className="user">
    <figure>
      <img src={ props.avatar_url } alt="" />
    </figure>
    <p>{ props.name } ({ props.login })</p>
  </div>

export default User
