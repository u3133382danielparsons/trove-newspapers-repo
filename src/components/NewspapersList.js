import React, { Component } from 'react'

export default ({data, filterText}) => {

      const newspapersList = data
        .filter(newspaper => {
          return newspaper.title.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        })
        .map(newspaper => {
        return(
          <li key={newspaper.id} className={newspaper.place}>{newspaper.title}</li>
        )
      })
      return (
          <div>
            <ul>
              {newspapersList}
            </ul>
          </div>
      )

}
