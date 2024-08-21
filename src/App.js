import homeImage from "./img/rick-and-morty-home.png";
import "./App.css";
import { useState } from "react";
import Characters from "./Components/Characters";

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={homeImage} alt="Rick & Morty" className="home-image" />
            <button onClick={reqApi} className="btn-search">
              Search character
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
