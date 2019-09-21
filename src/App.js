import React , { Component } from 'react'
import './App.css'
import WordCard from './WordCard'
let words = ['monster','hello','system','hydrogen','oxygen']
class App extends Component{
  render(){
    let num = Math.floor(Math.random()*words.length);
    return(
      <div>
        <WordCard value = {words[num]}></WordCard>
      </div>
    );
  }
}
export default App;