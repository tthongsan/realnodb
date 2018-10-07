import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import './reset.css';
import Header from './component/Header/Header';

class App extends Component {
  constructor(){
    super();
    this.state = {
      value: []
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
  }

componentDidMount() {
  axios.get('/api/articles').then(res => {
    console.log('step1', res.data)
    let tempArr =[]
    for (let i = 0; i < res.data.length; i++) {
      tempArr.push(res.data[i])
      
    }
    this.setState({value: tempArr})
  })
}

handleClick() {
  axios.put('/api/articles/3', {value: "updated comment"})
}
handleClick2() {
  console.log(this.state.value)
}
handleClick3() {
  
}


  render() {
    return (
      <div className="App">
       <Header />
       {this.state.value.map(val => {
         return <div key={val.id} className="main-left">
         <h3><a href={val.url}>{val.title}</a></h3>
         <h5>{val.desc}</h5>
         <img src={val.image} alt="pics" />
         <button key={val.id} onClick={this.handleClick3}>Read Later</button>
         </div>
       })}

       <button onClick={this.handleClick}>adaddaddad</button>
       <button onClick={this.handleClick2}>sup</button>

      </div>
    );
  }
}

export default App;
