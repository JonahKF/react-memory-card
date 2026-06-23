const PokemonCard = ({ pokemon, onClick }) => {
  const nameUpperCase = pokemon.name.toUpperCase();

  return (
    <button className="card" onClick={onClick}>
      <img src={pokemon.sprites.front_default} alt="" />
      {nameUpperCase}
    </button>
  );
};

export default PokemonCard;
