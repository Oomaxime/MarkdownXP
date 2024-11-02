import { useEffect, useState } from "react";
import { fetchMocktail } from "../../api/api";
import "./Mocktail.css";

const Mocktail = () => {
  const [mocktail, setMocktail] = useState(null);
  const updateMocktail = async () => {
    try {
      const mocktailData = await fetchMocktail();
      setMocktail(mocktailData);
    } catch {
      console.log("erreur recuperation mocktail");
    }
  };

  useEffect(() => {
    updateMocktail();
    const interval = setInterval(updateMocktail, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mocktail">
      <div className="mocktail-container">
        <img src="/src/assets/gifs/mocktail/WS2k.gif" className="MocktailGif1" />
        <img src="/src/assets/gifs/mocktail/3W0t.gif" className="MocktailGif2" />
        <img src="/src/assets/gifs/mocktail/4Bjg.gif" className="MocktailGif3" />
        <img src="/src/assets/gifs/mocktail/WS2k.gif" className="MocktailGif4" />
        <img src="/src/assets/gifs/mocktail/99Or.gif" className="MocktailGif5" />
        <img src="/src/assets/gifs/mocktail/CFsa.gif" className="MocktailGif6" />
        <img src="/src/assets/gifs/mocktail/WS2k.gif" className="MocktailGif7" />
        <img src="/src/assets/gifs/mocktail/5Mz4.gif" className="MocktailGif8" />
        <img src="/src/assets/gifs/mocktail/XiPv.gif" className="MocktailGif9" />
        <img src="/src/assets/gifs/mocktail/K8Yc.gif" className="MocktailGif10" />
        <img src="/src/assets/gifs/mocktail/75He.gif" className="MocktailGif11" />

        <h1 className="mocktail-title">Mocktail of the moment</h1>
        <h2 className="mocktail-description">{mocktail.strDrink}</h2>
        <img
          className="mocktail-image"
          src={mocktail.strDrinkThumb}
          alt={mocktail.strDrink}
        />
      </div>
    </div>
  );
};
export default Mocktail;



//https://techblog.ingeniance.fr/appeler-une-api-dans-un-composant-fonctionnel-react/