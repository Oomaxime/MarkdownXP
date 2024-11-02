import { useEffect, useState } from "react";
import { fetchJoke } from "../../api/api";
import "./Joke.css";

const Joke = () => {
  const [joke, setJoke] = useState(null);
  const [isFlipped, setIsFlipped] = useState(true);
  const updateJoke = async () => {
    try {
      const jokeData = await fetchJoke();
      setJoke(jokeData);
      setIsFlipped(true);
    } catch {
      console.log("erreur recuperation joke");
    }
  };

  const punchlineClick = () => {
    setIsFlipped(!isFlipped);
  };
  useEffect(() => {
    updateJoke();
    const interval = setInterval(updateJoke, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!joke) return <p>We are looking for the perfect joke for you...</p>;
  return (
    <div className="joke">
      <img src="/src/assets/gifs/joke/VwCK.gif" className="JokeGif1" />
      <img src="/src/assets/gifs/joke/6k8g.gif" className="JokeGif2" />
      <img src="/src/assets/gifs/joke/3MG4.gif" className="JokeGif3" />
      <img src="/src/assets/gifs/joke/YbrH.gif" className="JokeGif4" />
      <img src="/src/assets/gifs/joke/3kld.gif" className="JokeGif5" />
      <img src="/src/assets/gifs/joke/MXfm.gif" className="JokeGif6" />
      <h1 className="joke-title">Joke of the Moment</h1>
      <p className="joke-setup">{joke.setup}</p>
      <p
        className={`joke-punchline ${isFlipped ? "flipped" : ""}`}
        onClick={punchlineClick}
      >
        {joke.punchline}
      </p>
    </div>
  );
};
export default Joke;
