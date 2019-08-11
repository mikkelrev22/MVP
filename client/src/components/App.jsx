import React from 'react'
import axios from 'axios'
import DropdownButton from 'react-bootstrap/DropdownButton'

class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      basicItem1: '',
      possibleItems: '',
      results: '',
      saved: '',
    }
  }
  
  componentDidMount() {
    
  }
  
  
  render () {
    return (
      <div>
        <DropdownButton id="dropdown-item-button" title="Dropdown button">
        <Dropdown.Item as="button">Action</Dropdown.Item>
        <Dropdown.Item as="button">Another action</Dropdown.Item>
        <Dropdown.Item as="button">Something else</Dropdown.Item>
        Select an Item
        </DropdownButton>
      </div>
    )
  }
}

export default App