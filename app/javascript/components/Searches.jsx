import React, { Component } from 'react'

class Searches extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searches: [
        {
          id: '1',
          query: 'turn off notifications',
          user: {
            ip_address: '94.230.147.162',
          },
        },
        {
          id: '2',
          query: 'how to add a new client',
          user: {
            ip_address: '94.230.147.162',
          },
        },
      ],
    }
  }

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
            </tr>
          </thead>
          <tbody>
            {this.state.searches.map(search => (
              <tr key={search.id}>
                <td>{search.query}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    )
  }
}

export default Searches
