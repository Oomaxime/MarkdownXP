import { useEffect, useState } from "react";
import { fetchEventHistorical } from "../../api/api";
import "./HistoricEvents.css";

const History = () => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    fetchEventHistorical()
      .then((data) => {
        setEvent(data);
      })
      .catch((err) => {
        console.log("Erreur récuperation Evenement");
      });
  }, []);

  if (!event)
    return (
      <p>We are looking for historical events that might interest you ...</p>
    );
  return (
    <div className="event">
      <div className="event-container">
        <img
          src="/src/assets/gifs/historicEvent/YjjG.gif"
          className="EventGif1"
        />
        <img
          src="/src/assets/gifs/historicEvent/WME4.gif"
          className="EventGif2"
        />
        <img
          src="/src/assets/gifs/historicEvent/56i2.gif"
          className="EventGif3"
        />
        <img
          src="/src/assets/gifs/historicEvent/Vp3M.gif"
          className="EventGif4"
        />
        <img
          src="/src/assets/gifs/historicEvent/2r6D.gif"
          className="EventGif5"
        />
        <img
          src="/src/assets/gifs/historicEvent/hdt.gif"
          className="EventGif6"
        />
        <img
          src="/src/assets/gifs/historicEvent/X5NY.gif"
          className="EventGif7"
        />
        <img
          src="/src/assets/gifs/historicEvent/33Ho.gif"
          className="EventGif8"
        />
        <img
          src="/src/assets/gifs/historicEvent/X118.gif"
          className="EventGif9"
        />
        <h1 className="event-title">Historic moments of the day</h1>
        {event.map((event, index) => (
          <p key={index} className="event-description">
            {event.year}:{event.text}
          </p>
        ))}
      </div>
    </div>
  );
};
export default History;
