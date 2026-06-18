import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

const FetchPokemon = () => {
  const maxPokemon = 151;
  // Max possible is 1025

  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    const fetchRandomPokemon = async () => {
      const selectedIds = new Set();

      while (selectedIds.size < 25) {
        const randomId = Math.floor(Math.random() * maxPokemon) + 1;
        selectedIds.add(randomId);
      }

      const promises = Array.from(selectedIds).map((id) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
          res.json(),
        ),
      );

      const data = await Promise.all(promises);
      setPokemonList(data);
    };

    fetchRandomPokemon();

    // return () => console.log("test");
  }, []);

  if (pokemonList.length === 0) return <p>Loading...</p>;

  console.log(pokemonList);

  const onClick = () => console.log("Click");

  return (
    <div className="card-container">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={onClick} />
      ))}
    </div>
  );
};

export default FetchPokemon;
