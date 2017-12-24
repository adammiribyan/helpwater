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

        <ul className="search-list">
          {this.state.searches.map(search => (
            <li className="search-list__item" key={search.id}>
              {search.query}
            </li>
          ))}
        </ul>
      </article>
    )
  }
}

export default Searches
