import { useEffect, useState } from "react";
import { fetchAdvice } from "../../api/api";
import "./Advice.css";

const Advice = () => {
  const [advice, setAdvice] = useState(null);
  useEffect(() => {
    fetchAdvice()
      .then((data) => {
        setAdvice(data);
      })
      .catch((err) => {
        console.log("Erreur récuperation Advice");
      });
  }, []);

  if (!advice) return <p>We are looking for the perfect quote for you...</p>;

  return (
    <div className="advice">
      <img src="/src/assets/gifs/advice/bgV.gif" className="AdviceGif1" />
      <img src="/src/assets/gifs/advice/DDg.gif" className="AdviceGif2" />
      <img src="/src/assets/gifs/advice/bgV.gif" className="AdviceGif3" />
      <img src="/src/assets/gifs/advice/DDg.gif" className="AdviceGif4" />
      <img src="/src/assets/gifs/advice/bgV.gif" className="AdviceGif5" />
      <img src="/src/assets/gifs/advice/bgV.gif" className="AdviceGif6" />
      <img src="/src/assets/gifs/advice/DDg.gif" className="AdviceGif7" />
      <img src="/src/assets/gifs/advice/bgV.gif" className="AdviceGif8" />
      <img src="/src/assets/gifs/advice/DDg.gif" className="AdviceGif9" />
      <h1 className="advice-title">Advice of the Day</h1>
      <h2 className="advice-text">{advice}</h2>
    </div>
  );
};
export default Advice;
