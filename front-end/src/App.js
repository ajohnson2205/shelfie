import React, {Component} from 'react';
import './App.css';
import axios from 'axios'


import Body from './components/body.js'
import Header from './components/header.js'
import Bins from './components/bins.js'


const url = 'http://localhost:1337/api/shelf/A'

class App extends Component {
  constructor() {
    super();

    this.state = {
      myArray: []
    };
  }

  // get() {
  // axios
  //   .get('http://localhost:1337/api/shelf/A')
  //   .then((response) => {console.log(response)})
  // }

  get() {
    axios
      .get(url).then((response) => {this.setState({myArray: response.data});
        console.log("Here is the response: ", response)})
      .catch((response) => {
        console.log("We have an issue.")})
  }

  componentWillMount() {
    this.get();
  }

  render() {

    var arrayItem = this.state.myArray.map((item) => {
      return (
        <p key={item.entryid}>{item.entryid}{item.itemname}</p>
      )
    })

    return (
      <div>
        <Header />
        <Body />
        <Bins />
      </div>
    );
  }
}

export default App;
