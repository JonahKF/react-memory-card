import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

const FetchPokemon = () => {
  const maxPokemon = 1025;

  const [pokemonList, setPokemonList] = useState(null);
  useEffect(() => {
    let pokemonArray = [];
    for (let i = 0; i < 25; i++) {
      const randomId = Math.floor(Math.random() * maxPokemon) + 1;
      pokemonArray.push(
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then((res) => {
          return res.json();
        }),
      );
    }
    Promise.all(pokemonArray).then((data) => setPokemonList(data));
    console.log(pokemonList);
  }, []);

  if (!pokemonList) return <p>Loading...</p>;

  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <div key={index}>{pokemon.name}</div>
      ))}
    </div>
  );
};

export default FetchPokemon;
