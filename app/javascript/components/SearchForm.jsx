import React, { Component } from 'react'

import axios from 'axios'
import { debounce } from 'lodash'

class SearchForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
      query: '',
    }
  }

  handleChange = e => {
    this.setState({ query: e.target.value })
    this.saveSearch()
  }

  saveSearch = debounce(() => {
    axios.post('/searches', {
      search: {
        query: this.state.query,
        user_ip: this.props.userIp || '',
      },
    })
  }, 1000)

  render() {
    return (
      <div className="search-form">
        <div
          className={`search-form__input ${
            this.state.active ? 'search-form__input--active' : ''
          }`}
        >
          <label htmlFor="search_input" className="search-form__icon">
            <i className="fas fa-search" />
          </label>

          <input
            type="search"
            id="search_input"
            value={this.state.query}
            placeholder={this.props.placeholder || ''}
            onBlur={() => this.setState({ active: false })}
            onChange={this.handleChange}
            onFocus={() => this.setState({ active: true })}
          />
        </div>
      </div>
    )
  }
}

export default SearchForm
