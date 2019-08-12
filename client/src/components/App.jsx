import React from 'react'
import axios from 'axios'
import PossibleItems from './PossibleItems.jsx'
import Saved from './Saved.jsx'

class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      view: false,
      basicItem1: '',
      possibleItems: [],
      selected: '',
      saved: []
    }
    this.handleClickSelect = this.handleClickSelect.bind(this)
    this.handleClickItem = this.handleClickItem.bind(this)
    this.getItem = this.getItem.bind(this)
    this.handleClickDesiredItem = this.handleClickDesiredItem.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  
  handleClickSelect() {
    if (!this.state.view) {
    this.setState({
      view: true
    })
  }
    if (this.state.view) {
      this.setState({
        view: false,
        basicItem1: '',
        possibleItems: []
      })
    }
  }

  handleClickItem(e) {
   this.setState({
     possibleItems: []
   })
   this.getItem(e)
   this.setState({
    basicItem1: e.target.id
  })
  }

  handleClickDesiredItem(e) {
    this.setState({
      selected: e.target.name
    })
  }
  handleSave() {
    this.setState({
      saved: [...this.state.saved, this.state.selected],
      selected: ''
    })
  }
  handleDelete(event){
    if (event.target.id==="delete"){
      const saved = this.state.saved.filter(savedItem=> savedItem !== event.target.name)
      this.setState({
        saved: [...saved]
      })
    }
  }
  getItem(e) {
    axios.get(`/items/${e.target.id}`)
    .then((response)=>{
      response.data.forEach((e)=>{
      this.setState({
        possibleItems: [...this.state.possibleItems, e]
      })
      })
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
         {this.state.view === true && 
         <div>
         <PossibleItems possibleItems={this.state.possibleItems} handleClickDesiredItem={this.handleClickDesiredItem}/>
         </div>
         }
         {this.state.selected.length>0 &&
        <div>
          <h2>
          {this.state.selected}
          <button onClick= {this.handleSave}>Save</button>
          </h2>
        </div>
        }
        {this.state.saved.length>0 &&
        <div>
          Saved Items
          <h1>
            <Saved saved={this.state.saved} handleDelete={this.handleDelete}/> 
          </h1>
        </div>
        }
      </div>
    )
  }
}

export default App