import { useEffect, useState } from "react";
import { fetchAdvice } from "../../api/api";
import "./Advice.css";

const Advice = () => {
  const [advice, setAdvice] = useState(null);
  const updateAdvice = async () => {
    try {
      const adviceData = await fetchAdvice();
      setAdvice(adviceData);
    } catch {
      console.log("Erreur récupération conseil");
    }
  };
  useEffect(() => {
    updateAdvice();
    const interval = setInterval(updateAdvice, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!advice) return <p>We are looking for the perfect quote for you...</p>;
  return (
    <div className="advice">
      <img src="/src/assets/gifs/advice/bgV.gif" className="AdviceGif1" />
      <img src="/src/assets/gifs/advice/DDm.gif" className="AdviceGif2" />
      <img src="/src/assets/gifs/advice/3mRA.gif" className="AdviceGif3" />
      <img src="/src/assets/gifs/advice/DDg.gif" className="AdviceGif4" />
      <img src="/src/assets/gifs/advice/4tyu.gif" className="AdviceGif5" />
      <img src="/src/assets/gifs/advice/67Pg.gif" className="AdviceGif6" />
      <img src="/src/assets/gifs/advice/JTr.gif" className="AdviceGif7" />
      <img src="/src/assets/gifs/advice/bg9.gif" className="AdviceGif8" />
      <img src="/src/assets/gifs/advice/WS2p.gif" className="AdviceGif9" />
      <img src="/src/assets/gifs/advice/ZKZx.gif" className="AdviceGif10" />
      <h1 className="advice-title">Advice of the moment</h1>
      <h2 className="advice-text">{advice}</h2>
    </div>
  );
};
export default Advice;
