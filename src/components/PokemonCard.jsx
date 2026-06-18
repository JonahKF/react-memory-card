const PokemonCard = ({ pokemon, onClick }) => {
  return (
    <button onClick={onClick}>
      <img src={pokemon.sprites.front_default} alt="" />
      {pokemon.name}
    </button>
  );
};

export default PokemonCard;
