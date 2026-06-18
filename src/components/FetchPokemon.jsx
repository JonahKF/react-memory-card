import { useState, useEffect } from "react";
const FetchPokemon = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/35")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPokemon(data);
      });
  }, []);

  if (!pokemon) return <p>Loading...</p>;

  return (
    <div>
      <img
        key={pokemon.id}
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width={100}
      />
    </div>
  );
};
export default FetchPokemon;
