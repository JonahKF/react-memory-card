import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

const FetchPokemon = () => {
  const maxPokemon = 151;
  // Max possible is 1025

  const [pokemonList, setPokemonList] = useState([]);
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
  }, []);

  if (pokemonList.length === 0) return <p>Loading...</p>;

  console.log(pokemonList);

  const onClick = () => console.log("Click");

  return (
    <div>
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={onClick} />
      ))}
    </div>
  );
};

export default FetchPokemon;
