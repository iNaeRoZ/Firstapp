import PropTypes from "prop-types";
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

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }),
};
export default PokemonCard;
