import React from 'react'
import { connect } from 'react-redux'

const Beers = ({ beers, loading }) =>
  <div className="Beer-List">
    <h3>Search Results: ({ beers.length }) { loading && <p>loading...</p> }</h3>
    { beers.length > 0 && (
      <ul>
        { beers.map(beer => (
          <li key={ beer.id } className="Beer">
            <figure className="Beer-Image">
              <img src={ beer.image_url } alt="" />
            </figure>
            <p>{ beer.name } <small>{ beer.tagline }</small></p>
          </li>
        ))}
      </ul>
    )}
  </div>

const mapStateToProps = state => state.beers

export default connect(mapStateToProps)(Beers)
