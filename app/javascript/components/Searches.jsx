import React, { Component } from 'react'

class Searches extends Component {
  render() {
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
              <tr key={search.id}>
                <td>{search.query}</td>
                <td>1</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    )
  }
}

export default Searches
