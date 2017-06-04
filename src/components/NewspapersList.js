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
          <div>
            <p>filterText value is: {this.props.filterText}</p>
            <ul>
              {NewspapersList}
            </ul>
          </div>
      )
  }
}

export default NewspapersList
