import { useState, useEffect } from "react";
import PokemonGrid from "./components/PokemonGrid";
import shuffleArray from "./utils/shuffleArray";
import "./styles/App.css";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchRandomPokemon = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151", {
          signal: controller.signal,
        });
        const { results } = await res.json();

        const randomSelection = [...results]
          .sort(() => 0.5 - Math.random())
          .slice(0, 16);

        const detailedPokemonData = randomSelection.map((p) =>
          fetch(p.url, { signal: controller.signal }).then((res) => res.json()),
        );

        const resultsData = await Promise.all(detailedPokemonData);
        setPokemonData(resultsData);
        setLoading(false);
      } catch (err) {
        if (err.name !== "AbortError") console.error("Fetch error:", err);
      }
    };

    fetchRandomPokemon();
    return () => controller.abort();
  }, []);

  if (loading) return <p>Loading...</p>;

  console.log(pokemonData);

  const reorderList = () => {
    const pokemonList = shuffleArray(pokemonData);

    console.log(`Reordered: ${pokemonList}`);

    setPokemonData(pokemonList);
  };

  return (
    <>
      <section id="center">
        <h1>Hello World!</h1>

        <PokemonGrid pokemonData={pokemonData} onClick={reorderList} />
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <span>Bottom Left</span>
        </div>
        <div id="social">
          <span>Bottom Right</span>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="spacer"></section>
    </>
  );
}

export default App;
