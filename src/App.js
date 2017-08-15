import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import * as action from './action'

class App extends Component {
  submit(){ 
    this.props.add(this.refs.inp.value) 
  }
  render() {
    return (
      <div className="App">
        {this.props.jgr.map((e)=>{
            return <div>{e}</div>
        })}
        <input ref="inp" type="text"/>
        <button onClick={this.submit.bind(this)}>+</button>
       </div>
    );
  }
}

export default connect(e=>({jgr:e}),action)(App);
