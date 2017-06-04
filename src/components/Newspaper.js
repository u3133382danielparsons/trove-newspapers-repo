import React from 'react'

/* ############################ */
/* ##### Single baby name ##### */
/* ############################ */

export default ({
  id,
  info,
  handleFavourite
}) => (
  <li
    className={info.place}
    onClick={() => handleFavourite(id)}>
    {info.title}
  </li>
)
