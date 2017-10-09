import React from 'react'
import { connect } from 'react-redux'
import { searchBeers } from '../actions'

const Search = ({ defaultValue, messages, onChange }) =>
  <div className="Search">
    <input
      type="text"
      placeholder="Search for a Beer"
      defaultValue={ defaultValue }
      onChange={ e => onChange(e.target.value) }
    />
    { messages.length > 0 && (
      <ul>
        { messages.map(x =>
          <li key={ x.text } className={ `Message Message--${x.type}` }>
            { x.text }
          </li>
        )}
      </ul>
    )}
  </div>

const mapStateToProps = state => {
  return {
    defaultValue: '',
    messages: state.beers.messages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: query => dispatch(searchBeers(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
