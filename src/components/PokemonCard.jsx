const PokemonCard = ({ pokemon }) => {
  console.log(pokemon);

  return (
    <div>
      <figure>
        <h2>{pokemon.name}</h2>
        {pokemon.imgSrc !== undefined ? (
          <img src={pokemon.imgSrc} />
        ) : (
          <p>???</p>
        )}
      </figure>
      <figcaption>Bulbasaur</figcaption>
    </div>
  );
};

export default PokemonCard;
