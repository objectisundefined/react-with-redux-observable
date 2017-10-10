import React from 'react'
import { connect } from 'react-redux'

import { NEW_ITEM, UPDATE_ITEM_TEXT } from '../actions'

const AddStory = ({ text, update, add }) => {
  return (
    <div className="Search">
      <input type="text" value={ text } onChange={ e => update(e.target.value) }></input>
      <button type="button" onClick={ () => add(text) }>add new item</button>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    text: state.stories.text
  }
}

function mapDispatchToProps (dispatch) {
  return {
    update (payload) {
      dispatch({ type: UPDATE_ITEM_TEXT, payload })
    },
    add (payload) {
      dispatch({ type: NEW_ITEM, payload })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStory)
