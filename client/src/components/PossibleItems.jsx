import React from 'react'

const PossibleItems = (props) => {
  const items = props.possibleItems
  const listItems = items.map((e, i)=>
      <li key={i}>
        {e.itemName} {e.combo} {e.description}
      </li>
  )
  return (<ul>{listItems}</ul>)
}

export default PossibleItems