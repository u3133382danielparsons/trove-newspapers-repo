import React, { Component } from 'react'
import './App.css'
import NewspapersList from './components/NewspapersList'

class App extends Component {
  render() {

    return(
      <div>
        <header>
          <h1>
            Trove Newspapers
          </h1>
        </header>
        <div className="flex-container">
          <main>
            <NewspapersList data={this.props.data} />
          </main>
        </div>
      </div>
    )

  }
}

export default App
