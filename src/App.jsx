import PropTypes from "prop-types";
import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

function App() {
  const [pokemonIndex, setpokemonIndex] = useState(0);
  const handleClickPrecedent = () => {
    if (pokemonIndex > 0) {
      setpokemonIndex(pokemonIndex - 1);
    }
  };
  const handleClickSuivant = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setpokemonIndex(pokemonIndex + 1);
    }
  };
  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <NavBar
        pokemonIndex={pokemonIndex}
        suivantPoke={pokemonList.length - 1}
        handleClickPrecedent={handleClickPrecedent}
        handleClickSuivant={handleClickSuivant}
      />
    </div>
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
      "https://i.pinimg.com/originals/ba/f3/a9/baf3a95ad439d4b4cdc81a98c217a48d.png",
  },
];
