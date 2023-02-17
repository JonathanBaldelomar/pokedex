import './App.css';
import { useEffect, useState } from 'react';
import Areachart from './components/showStats';
import WeaknessF from './components/weakness';
import MediaCard from './components/CustomCard';


//import WeaknessF from './components/weakness';

function App() {
  const pokeApiDomain = `https://pokeapi.co/api/v2/pokemon/`;
  const [currentId, setCurrentId] = useState(1);
  const [pokemon, setPokemon] = useState({sprites:{other:{"official-artwork":{}}}});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
    fetch(`${pokeApiDomain}${currentId}`)
    .then(response => response.json())
    .then(pokemonData => {
      console.log(pokemonData);
      setCurrentId(pokemonData.id);
      setPokemon(pokemonData);
    })
    .catch(err => {
      console.log(err)})
  }, [currentId]);

  const setPokemonId = (id) => {
    setCurrentId(id);
  }

  return (
    <div className="App">
      <header className="App-header">
        {
          isLoading ? (
            <></>
          ) : (
            <div>
              {/* Head container */}
              <div>
                <label>{pokemon.name}</label>
              </div>
              {/* Screen container */}
              <div>
                <img src= {pokemon.sprites.front_default} className="App-logo" alt="logo" />
              </div>
              {/* Info container */}
              <div>
                {/* <button onClick={()=> setPokemonId(currentId > 2 ? currentId - 1 : 1)}>Previous</button> */}
                <button disabled={currentId <= 1} onClick={()=> setPokemonId(currentId -1)}>Previous</button>
                <button onClick={()=> setPokemonId(currentId + 1)}>Next</button>
              </div>
              {/* Weight container */}
              <hr></hr>
              <div>
                <h3> Weight </h3>
                <p>{pokemon.weight / 10} kg</p>
              </div>
              <hr></hr>
              {/* Ability container */}
              {/* <div>
                <h3> Abilities </h3>
                <ul>{pokemon.abilities?.map(ab => {
                  return(
                    <li> {ab.ability.name} </li>
                  )
                }
                )}</ul>
              </div> */}
              <hr></hr>
              {/* Types container */}
              {/* <div>
                <h3> Types </h3>
                <ul>{pokemon.types?.map(ty => {
                  return(
                    <li> {ty.type.name} </li>
                  )
                }
                )}</ul>
              </div> */}
              <hr></hr>
              {/* Weakness container */}
                {/* <WeaknessF /> */}
              {/* <Areachart /> */}
              {/* Card Media */}
              <div>
                <MediaCard logo={pokemon.sprites.front_default} image2={pokemon.sprites.other['official-artwork'].front_default} name={pokemon.name}/>
              </div>
            </div>
          )
        }
      </header>
    </div>
  );
}

export default App;
