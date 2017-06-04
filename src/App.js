import React, { Component } from 'react'
// import './App.css'
import Search from './components/Search'
import ShortList from './components/ShortList'
import NewspapersList from './components/NewspapersList'
import Credit from './components/Credits'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      filterText: 'hello'
    }
  }
  filterUpdate(value){
    this.setState({
      filterText: value
    })
  }
  render() {
    return(
      <div className="content">
        <header>
          <h1>
            Trove Newspapers
          </h1>
          <Search filterText={this.state.filterText}
                  filterUpdate={this.filterUpdate.bind(this)}
           />
        </header>
        <div className="flex-container">
          <main>
            <ShortList />
            <NewspapersList
              data={this.props.data}
              filterText={this.state.filterText}
            />
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
