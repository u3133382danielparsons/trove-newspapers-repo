import React, { Component } from 'react'

class NewspapersList extends Component {

  render(){

      const {data} = this.props
      console.log("We should see the data here", data )
      const NewspapersList = data.map(newspaper => {
        return(
          <li key={newspaper.id} className={newspaper.place}>{newspaper.title}</li>
        )
      })
      return (
              <ul>
                {NewspapersList}
              </ul>
      )
  }
}

export default NewspapersList
