const PokemonCard = () => {
  const pokemon = pokemonList[0];
  //{imgSrc !== undefined ? <img src={imgSrc} /> : <p>???</p>}

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

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

export default PokemonCard;
