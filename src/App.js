import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [nayok, setNayok] = useState([])
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayok(data))
  }, [])
  //const nayok = [{name: 'Jasim', age:56},{name: 'dipjol'} , {name: 'Raj'}, {name: 'Rajjak'}, {name: 'Tommy'}]


  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
        nayok.map(nk => <Nayok name={nk.name} key ={nk.id} age="40"></Nayok>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function MovieCounter(){
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);
  console.log(count, setCount)
  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h4>Number of Movies: {count}</h4>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count + 10}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>

  )
}

function MovieDisplay(props){
  return <h4>Movies I have Watched: {props.movies}</h4>
}

function Nayok(props){
  console.log(props.name)
  const nayokStyle = {
    border: '2px solid red',
    margin: '10px'
  }
  return (
    <div style = {nayokStyle}>
      <h1>Ami Nayok - {props.name}</h1>
  <h6>I have done 5 movies in {props.age || 30}years</h6>
    </div>
  )
}

export default App;
