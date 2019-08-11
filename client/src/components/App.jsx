import React from 'react'
import axios from 'axios'


class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      view: false,
      basicItem1: '',
      possibleItems: '',
      results: '',
      saved: '',
    }
    this.handleClickSelect = this.handleClickSelect.bind(this)
    this.handleClickItem = this.handleClickItem.bind(this)
    this.getItem = this.getItem.bind(this)
  }
  handleClickSelect() {
    this.setState({
      view: true
    })
  }

  handleClickItem(e) {
   this.getItem(e)
  }

  getItem(e) {
    axios.get(`/items/${e.target.id}`)
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  
  render () {
    return (
      <div>
       <button onClick={this.handleClickSelect}>
         Select an Item
       </button>
         {this.state.view === true && 
         <div>
        <button onClick= {this.handleClickItem} id="bfsword">B.F. Sword</button>
        <button onClick= {this.handleClickItem} id="recurvebow">Recurve Bow</button>
        <button onClick= {this.handleClickItem} id="needlesslylargerod">Needlessly Large Rod</button>
        <button onClick= {this.handleClickItem} id="tearofthegoddess">Tear of the Goddess</button>
        <button onClick= {this.handleClickItem} id="chainvest">Chain Vest</button>
        <button onClick= {this.handleClickItem} id="negatroncloak">Negatron Cloak</button>
        <button onClick= {this.handleClickItem} id="giantsbelt">Giant's Belt</button>
        <button onClick= {this.handleClickItem} id="spatula">Spatula</button>
        </div>
         }
      </div>
    )
  }
}

export default App