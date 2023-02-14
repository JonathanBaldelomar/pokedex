import { useEffect, useState } from 'react';

function WeaknessF() {
    const pokeApiWeakness = `https://pokeapi.co/api/v2/type/`;
    const [currentIdWeakness, setCurrentIdWeakness] = useState(1);
    const [weakness, setPokemonWeakness] = useState({sprites:{}});

    useEffect(()=> {
        fetch(`${pokeApiWeakness}${currentIdWeakness}`)
        .then(responseW => responseW.json())
        .then(pokemonWeakness => {
          console.log("Weakness");
          console.log(pokemonWeakness);
          setCurrentIdWeakness(pokemonWeakness.id);
          setPokemonWeakness(pokemonWeakness);
        })
        .catch(err => {
          console.log(err)})
      }, []);

    return(
    <div>
      <h3> Weakness </h3>
        <ul>{pokeApiWeakness.id?.map(wk => {
          return(
            <li> {wk.damage_relations.double_damage_to} </li>
          )
        }
      )}</ul>
    </div>
    );
}

export default WeaknessF;