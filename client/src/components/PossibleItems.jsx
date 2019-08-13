import React from 'react'

const PossibleItems = (props) => {
  const items = props.possibleItems
  const listItems = items.map((e, i)=>
      <li key={i} >
        <a onClick={props.handleClickDesiredItem} 
        name={e.itemName}>
        {e.itemName} {`${e.combo[0]} + ${e.combo[1]}`} {e.description} </a>
      </li>
  )
  return (<ul>{listItems}</ul>)
}

export default PossibleItems