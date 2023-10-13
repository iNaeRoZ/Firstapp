import React from "react";

const NavBar = ({
  pokemonIndex,
  handleClickPrecedent,
  handleClickSuivant,
  suivantPoke,
}) => {
  return (
    <div>
      {pokemonIndex > 0 ? (
        <button onClick={handleClickPrecedent}>Précedent</button>
      ) : null}{" "}
      {pokemonIndex < suivantPoke ? (
        <button onClick={handleClickSuivant}>Suivant</button>
      ) : null}
    </div>
  );
};

export default NavBar;
