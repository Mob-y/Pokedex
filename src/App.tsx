import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";

function App() {
  return (
   <div>
    <PokemonCard />
   </div>
  );
}

export default App;
