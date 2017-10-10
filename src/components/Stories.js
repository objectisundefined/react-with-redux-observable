import React from 'react'
import { connect } from 'react-redux'
import { fetchStoriesAction } from '../actions'

const Story = props =>
  <li>
    <a href={ props.url }>{ props.title }</a>
  </li>

const StoryList = props =>
  props.stories.length
  ? (
    <ul>
      { props.stories.map(x => <Story { ...x } key={ x.id } />) }
    </ul>
  )
  : null

export const Stories = props =>
  props.stories.loading
  ? <p>Please wait...</p>
  : (
    <div>
      <button type="button" onClick={ props.loadStories }>Load Top 5 Stories</button>

      <StoryList stories={ props.stories } />
    </div>
  )

const mapStateToProps = state => state.stories

const mapDispatchToProps = dispatch => {
  return {
    loadStories: () => dispatch(fetchStoriesAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stories)
