import { useState, useEffect } from "react";
import WebBrowser from "./components/WebBrowser/WebBrowser";

//Recuperation jour/mois pour l'eveneemnt historique
function getDate() {
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDate();
  //console.log("Date actuelle: ", { day, month });
  return { day, month };
}

function App() {
  // Stackage citations, blagues, mocktails, recettes, evenement historique
  /*  const [advice, setAdvice] = useState("");
  const [joke, setJoke] = useState({ setup: "", punchline: "" });
  const [mocktail, setMocktail] = useState({ strDrink: "", strDrinkThumb: "" });
  const [recipe, setRecipe] = useState({
    strMeal: "",
    strInstructions: "",
    strIngredients: [],
  });
  const [randomEvent, setRandomEvent] = useState();

  //Recup Citation depuis API
  function fetchAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip.advice))
      .catch((err) => console.error(err));
  }

  //Recuperation Blagues depuis API
  function fetchJock() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => setJoke({ setup: data.setup, punchline: data.punchline }))
      .catch((err) => console.error(err));
  }

  //Recup Mocktails depuis API
  function fetchMocktail() {
    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
    )
      .then((res) => res.json())
      .then((data) => {
        const randomMocktail =
          data.drinks[Math.floor(Math.random() * data.drinks.length)];
        setMocktail({
          strDrink: randomMocktail.strDrink,
          strDrinkThumb: randomMocktail.strDrinkThumb,
        });
      })
      .catch((err) => console.error(err));
  }

  //recuperer Recettes depuis API
  function fetchRecipe() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => {
        const recipe = data.meals[0];
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
          const ingredient = recipe["strIngredient" + i];
          const measure = recipe["strMeasure" + i];

          if (ingredient) {
            let ingredientMeasure = "";
            if (measure) {
              ingredientMeasure = measure + " " + ingredient;
            } else {
              ingredientMeasure = ingredient;
            }
            ingredients.push(ingredientMeasure);
          }
        }
        setRecipe({
          strMeal: recipe.strMeal,
          strInstructions: recipe.strInstructions,
          strIngredients: ingredients,
        });
      })
      .catch((err) => console.error(err));
  }

  //Recuperation Eveneemnts historique API
  function fetchEventHistorical() {
    const { day, month } = getDate();
    fetch("https://history.muffinlabs.com/date/" + (month + 1) + "/" + day)
      .then((res) => res.json())
      .then((data) => {
        const events = data.data.Events;
        if (events.length > 0) {
          const randomEvent = Math.floor(Math.random() * events.length);
          setRandomEvent(events[randomEvent]);
        }
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchAdvice();
    fetchJock();
    fetchMocktail();
    fetchRecipe();
    fetchEventHistorical();

    const intervalId = setInterval(() => {
      fetchAdvice();
      fetchJock();
      fetchMocktail();
      fetchRecipe();
      fetchEventHistorical();
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);
*/
  return <WebBrowser />;
}

export default App;
