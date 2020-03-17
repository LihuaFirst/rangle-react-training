import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList';
import SearchBox from "./components/SearchBox";
import robots from "./data/robots";

class App extends Component {
  constructor() {
    super();
    this.state ={
      searchTerm: "",
      robots: robots
    }
  }
  onSearchChange =(evt) => {
    this.setState({searchTerm: evt.target.value});
  }
  render() {
    const {searchTerm, robots} = this.state;
    const filteredRobots = robots.filter(robot =>(
      robot.name.toLowerCase().includes(searchTerm.toLowerCase())
    ));
    return (
      <div className="tc">
        <h1>RoboDex</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList robots={filteredRobots}/>
      </div>
    )
  }
}



export default App;
