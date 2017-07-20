import React from 'react'
import Newspaper from './Newspaper'
export default ({
  data,
  filter,
  favourites,
  addFavourite
}) => {
      const input = filter.toLowerCase()

      // Gather the list of newspapers
      const newspapers = data
      // filtering out the names that...
      .filter((person, i) => {
      return (
          // ...are already favourited
          favourites.indexOf(person.id) === -1
          // ...are not matching the current search value
          && !person.title.toLowerCase().indexOf(input)
        )
      })
      // ...output a <Name /> component for each name
      .map((person, i) => {
      // only display names that match current input string
        return (
          <Newspaper
            id={person.id}
            key={i}
            info={person}
            handleFavourite={(id) => addFavourite(id)}
          />
        )
      })
      return (
          <div>
            <ul>
              {newspapers}
            </ul>
          </div>
      )

}
