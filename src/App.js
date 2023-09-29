//import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function Left1(props){
  return(
    <div>
      <h1>Left1: {props.number}</h1>
      <Left2 number={props.number}></Left2>
    </div>
  )
}

function Left2(props){
  return(
    <div>
      <h1>Left2 : {props.number}</h1>
      <Left3 number={props.number} ></Left3>
    </div>
  )
}

function Left3(props){
  return(
    <div>
      <h1>Left3 : {props.number}</h1>
    </div>
  )
}

function Right1(props){
  return(
    <div>
      <h1>Right1</h1>
      <Right2 onIncrease={function(){
        props.onIncrease();
      }}></Right2>
      
    </div>
  )
}

function Right2(props){
  return(
    <div>
      <h1>Right2</h1>
      <Right3 onIncrease={function(){
        props.onIncrease();
      }}></Right3>
    </div>
  )
}

function Right3(props){
  return(
    <div>
      <h1>Right3</h1>
      <input type="button" value="+" onClick={function(){
        props.onIncrease();
      }}></input>
      
    </div>
  )
}

function App() {
  const [number,setNumber]=useState(1);
  return (
    <div id="container">
        <h1>Root: {number}</h1>
        <div id="grid">
          <Left1 number={number}></Left1>
          <Right1 onIncrease={function(){
            setNumber(number+1);
          }}></Right1>
        </div>
    </div>
  );
}

//App에서의 number 값을 계속해서 하위 컴포넌트로 전달하기는 매우 복잡함.
//컴포넌트가 여러개일 수록 더 복잡하다. 절망적이다.
//prop으로 유선 연결돼있기 때문에 매우 복잡
//유선 prop으로 전달하는 방식이 아닌 새로운 효과적 방법이 Redux임.

export default App;
