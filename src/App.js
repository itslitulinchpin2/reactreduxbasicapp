//import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function Left1(){
  return(
    <div>
      <h1>Left1</h1>
      <Left2></Left2>
    </div>
  )
}

function Left2(){
  return(
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  )
}

function Left3(){
  return(
    <div>
      <h1>Left3</h1>
    </div>
  )
}


function App() {
  const [number,setNumber]=useState(1);
  return (
    <div id="container">
      <h1>Root</h1>
      <Left1></Left1>
    </div>
  );
}

export default App;
