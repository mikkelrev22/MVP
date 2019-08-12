import React from 'react'

const Saved = (props) => {
  const savedItems = props.saved
  const listSavedItems = savedItems.map((e, j)=>
  <li key={j}>
    {e}
    <button id="delete" name={e} onClick={props.handleDelete}>X</button>
  </li> 
  )
  return (<ul>{listSavedItems}</ul>)
}

export default Saved