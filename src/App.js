import React from "react";
import logo from './logo.svg';
import './App.css';
import fetch from 'node-fetch';
import TitleBar from './TitleBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      koganusanIndex: "",
      previous: "",
      next: "",
      start: "",
      end: "",
      body: ""
    };
  }
  
  componentDidMount() {
    fetch('https://images.beigebeard.com/koganusan-index.txt')
      .then(res => res.text())
      .then(body => this.setState({body}));
  }
    //var res = await fetch('https://images.beigebeard.com/koganusan-index.txt');
    //var text = await res.text();

    async getIndex() {
      //return text;
      fetch('https://images.beigebeard.com/koganusan-index.txt')
        .then(res => res.text())
        .then(body => this.setState({body}));
    }

    render() {
      //this.getIndex();
      
      return (
        <React.StrictMode>
        <TitleBar />
        <div className="App">
            <img src="https://images.beigebeard.com/koganusan/day05-vault.png" className="App-logo" alt="logo" />
            <p>
              {this.state.body}
            </p>

        </div>
      <TitleBar />
      </React.StrictMode>
      );
    }
    
    
}

export default App;
