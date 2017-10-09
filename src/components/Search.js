import React from 'react'
import { connect } from 'react-redux'
import { searchBeers, cancelSearch} from '../actions'

const Search = ({ defaultValue, messages, onChange, loading, cancel }) =>
  <div className="Search">
    <input
      type="text"
      placeholder="Search for a Beer"
      defaultValue={ defaultValue }
      onChange={ e => onChange(e.target.value) }
    />
    { loading && (
      <button type="button" onClick={ cancel }>Cancel</button> 
    )}
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
    messages: state.beers.messages,
    loading: state.beers.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: query => dispatch(searchBeers(query)),
    cancel: () => dispatch(cancelSearch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
