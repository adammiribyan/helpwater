import React, { Component } from 'react'

import Searches from './Searches'
import SearchForm from './SearchForm'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <SearchForm placeholder="Find article" />
        </header>

        <div className="centered">
          <Searches />
        </div>
      </div>
    )
  }
}

export default App