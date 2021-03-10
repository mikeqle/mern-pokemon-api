import './App.css';
import React, { useState } from 'react';

function App() {
  const [ pokemonList, setPokemonList ] = useState([]);

  const clickHandler = (e) => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=802')
    .then( response =>  response.json() )
    .then( response => {
      setPokemonList( response.results );
    } )
  };  

  return (
    <div className="App">
      <button onClick={ clickHandler }>Fetch Pokemon</button>
      <ul>
      { pokemonList 
          ? pokemonList.map( (pokemon, index) => {
            return <li key={ index }>{ pokemon.name }</li>
          } )
        : null
      } 
      </ul>
    </div>
  );
}

export default App;
