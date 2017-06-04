import React, { Component } from 'react'
import './App.css'
import NewspapersList from './components/NewspapersList'
import Credit from './components/Credits'

class App extends Component {
  render() {

    return(
      <div className="content">
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
        <footer>
          <Credit />
        </footer>
      </div>
    )

  }
}

export default App
