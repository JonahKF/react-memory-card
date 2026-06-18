const PokemonCard = ({ pokemon, onClick }) => {
  return <button onClick={onClick}>{pokemon.name}</button>;
};

export default PokemonCard;
