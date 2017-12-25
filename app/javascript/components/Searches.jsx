import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { fetchSearches } from '../actions'

@connect(state => {
  return {
    isOutdated: state.isOutdated,
    searches: state.searches,
  }
})
class Searches extends Component {
  render() {
    if (this.props.isOutdated) {
      this.props.dispatch(fetchSearches())
    }

    return (
      <article className="searches">
        <h1 className="searches__heading">
          <strong className="sketch-underline">They've Been Wondering…</strong>
        </h1>

        <table className="search-list">
          <thead>
            <tr>
              <th>Query</th>
              <th>
                Searches, <small>times</small>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.searches.map(search => (
              <tr key={search.query}>
                <td>{search.query}</td>
                <td>{search.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    )
  }
}

export default Searches
