import React from "react";

const NavBar = ({ handleClickPokemon, pokemonList }) => {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <div key={index}>
          <button onClick={() => handleClickPokemon(index)}>
            {pokemon.name}
          </button>
        </div>
      ))}
    </div>
  );
};
export default NavBar;
