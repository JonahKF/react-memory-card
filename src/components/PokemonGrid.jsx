import PokemonCard from "./PokemonCard";

const PokemonGrid = ({ pokemonData, onClick }) => {
  return (
    <div className="card-container">
      {pokemonData.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={onClick} />
      ))}
    </div>
  );
};

export default PokemonGrid;
