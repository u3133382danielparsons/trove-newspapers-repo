import React from 'react'
import Name from './Newspaper'

export default ({
  favourites,
  data,
  deleteFavourite
}) => {
  const hasFavourites = (favourites.length > 0)
  const favList = favourites.map((fav, i) => {
    return (
      <Name
        id={i}
        key={i}
        info={data[fav]}
        handleFavourite={(id) => deleteFavourite(id)}
      />
    )
  })
  return (
    <div className="favourites">
      <h4>
        {hasFavourites
          ? 'Your Shortlist - Click on a shortlisted newspaper to delete it..'
          : 'Click on a newspaper to shortlist it..'
        }
      </h4>
      <ul>
        {favList}
      </ul>
      {hasFavourites && <hr/>}
    </div>
  )
}
