import React, { Component } from 'react';

import './App.css';
import CardList from './robo/CardList'
import SearchBox from './robo/SearchBox'
import Scroll from './robo/Scroll'
import 'tachyons'
import {robots} from './robots'

class App extends Component {
  constructor(){
    super()
 this.state={
 
    robots:robots,
      searchField:'',
      
  
   
}
  }

// componentDidMount(){
// fetch( 'https://jsonplaceholder.typicode.com/users')
// .then(res=>res.json())
// .then(users=>this.setState({robots:users}));
// }



  onchangeS=(event)=>{
    
    this.setState({searchField:event.target.value})

    
  
  }



  render() {
    const filterR = this.state.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

    if(!this.state.robots.length){
      return(<h2>Loading...</h2>)
    }else{
      return (
        <div className="App">
            <h1>RoboFriend</h1>
  
            <SearchBox onsearch={this.onchangeS}/>
          <Scroll>
        <CardList robots={filterR} />
         </Scroll>
        </div>
      );

    }
   
  }
}




export default App;
