import React, { Component } from 'react';
import axios from "axios";
// import logo from '../assets/logo.svg';
import '../css/App.css';

class Main extends Component {

  constructor(props)  {
    super(props);
    this.state = {ponged: "Not Ponged"};
    this.ping = this.ping.bind(this);
  }

  ping(){
    axios.get("http://localhost:8080/pong")
    .then(res=>{
        alert("Received successful response from server!");
        this.setState({ponged: "Ponged!"});
    }, err=>{
        alert("Server rejected response with =>"+ err);
    }
    );
    console.log("Ping is clicked");
  }  

  render() {
    return (
      <div className="Main">
        <header className="App-header">
          <h1 className="App-title">Ping</h1>
        </header>
        <p className="App-intro">
          <div><button onClick={this.ping}>Ping!</button></div>
          <div>Ponged: {this.state.ponged}</div>
        </p>
      </div>
    );
  }
}

export default Main;