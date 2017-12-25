import React, { Component } from 'react'
import axios from 'axios'

import Searches from './Searches'
import SearchForm from './SearchForm'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searches: [],
      currentUserIp: document
        .getElementsByName('current_user_ip')[0]
        .getAttribute('content'),
    }
  }

  render() {
    return (
      <div>
        <header>
          <SearchForm
            placeholder="Find article"
            userIp={this.state.currentUserIp}
          />
        </header>

        <div className="centered">
          <Searches />
        </div>
      </div>
    )
  }
}

export default App
