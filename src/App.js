import React, { Component } from 'react'
import Search from './components/Search'
import ShortList from './components/ShortList'
import NewspapersList from './components/NewspapersList'
import Credit from './components/Credits'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      filterText: '',
      favourites: []
    }
  }
   // update filterText in state when user types
  filterUpdate(value){
    this.setState({
      filterText: value
    })
  }
  // add clicked newspaper ID to the favourites array
  addFavourite(id){
    const favList = this.state.favourites.concat([id])
    this.setState({
      favourites: favList
    })
  }
  // remove ID from the favourites array
  deleteFavourite(id) {
    const { favourites } = this.state
    const newList = [
      ...favourites.slice(0, id),
      ...favourites.slice(id + 1)
      ]
    this.setState({
      favourites: newList
    })
  }

  render() {
    const hasSearch = this.state.filterText.length > 0
    return(
      <div className="content">
        <header>
          <h1>
            Trove Newspapers
          </h1>
          <Search filterVal={this.state.filterText}
                  filterUpdate={this.filterUpdate.bind(this)}
           />
        </header>
        <div className="flex-container">
          <main>
            <ShortList
              favourites={this.state.favourites}
              deleteFavourite={this.deleteFavourite.bind(this)}
              data={this.props.data}
            />
            <NewspapersList
              data={this.props.data}
              filter={this.state.filterText}
              favourites={this.state.favourites}
              addFavourite={this.addFavourite.bind(this)}
            />
            {/*
            Show only if user has typed in search.
            To reset the input field, we pass an
            empty value to the filterUpdate method
          */}
          {hasSearch &&
            <button
              onClick={this.filterUpdate.bind(this, '')}>
              Clear Search
            </button>
          }
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
