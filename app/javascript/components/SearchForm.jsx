import React, { Component } from 'react'

class SearchForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
    }
  }

  render() {
    return (
      <div className="search-form">
        <div className="search-form__input">
          <div
            className={`search-form__icon ${
              this.state.active ? 'search-form__icon--active' : ''
            }`}
          >
            <i className="fas fa-search" />
          </div>

          <input
            type="search"
            onFocus={() => this.setState({ active: true })}
            onBlur={() => this.setState({ active: false })}
          />
        </div>
      </div>
    )
  }
}

export default SearchForm
