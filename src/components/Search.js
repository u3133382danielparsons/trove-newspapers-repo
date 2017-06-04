import React, { Component } from 'react'

class Search extends Component{
  filterUpdate(){
    const val = this.myValue.value
    console.log(val)
  }
  render(){
    return(
      <form>
        <input type="text"
                placeholder="Type to filter. . ."
                ref={(value) => this.myValue = value}
                onChange={this.filterUpdate.bind(this)}/>
      </form>
    )
  }
}

export default Search
