import React,{Component} from 'react';
import {CardList} from './components/card-list/cardlist';
import {SearchBox} from './searchbox/search-box';
import './searchbox/search-box-style.css';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state=  {
    prof: [ ],
    searchField:''
    };
  }
  onSearchChange =(event) =>{
    this.setState({searchField:event.target.value})
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users => this.setState({prof:users}));
  }

  render(){
    const {prof,searchField} = this.state;
    const filterProfile = prof.filter( userPro => 
      userPro.name.toLowerCase()
      .includes(searchField.toLowerCase()) );
    return (
      <div className="App">
               <h1>Users profile</h1>
               <SearchBox placeholder='Search profile'
               onSearchChange={this.onSearchChange} />
               <CardList prof = {filterProfile}/>      
      </div>
    );
  }
  

}
export default App;
