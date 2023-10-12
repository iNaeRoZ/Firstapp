import PropTypes from "prop-types";
import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClick = (event) => {
    console.log(event.target);
  };

  const handleClickSuivant = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  const handleCLickPrécedent = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };
  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        {pokemonIndex > 0 && (
          <button onClick={handleCLickPrécedent}>Précedent</button>
        )}
        {pokemonIndex < pokemonList.length - 1 && (
          <button onClick={handleClickSuivant}>Suivant</button>
        )}
      </div>
    </>
  );
}

export default App;

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
    imgSrc:
      "https://shreepng.com/img/Inside/Celebrities/TheRock/Angry%20The%20Rock.png",
  },
];
