import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

const FetchPokemon = () => {
  const [pokemonList, setPokemonList] = useState(null);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=25")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPokemonList(data.results);
      });
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
