import { useState, useEffect } from "react";

// Voir comment on va faire les routes, g juste mis ca pour tester le markdown
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import MarkdownProvider from "./providers/MarkdownProvider";
import MainLayout from "./components/MainLayout/MainLayout"
import Editor from "./components/Editor/Editor";
import Preview from "./components/Preview/Preview";
import NavBarApp from "./components/NavBarApp/NavBarApp"
import BottomBar from "./components/BottomBar/BottomBar"

import EditorProvider from "./providers/EditorProvider"

//Recuperation jour/mois pour l'eveneemnt historique
function getDate(){
  const today = new Date();
  const month =today.getMonth();
  const day = today.getDate();
  //console.log("Date actuelle: ", { day, month });
  return{ day, month};
}

function App() {
  // Stackage citations, blagues, mocktails, recettes, evenement historique
  const [ advice, setAdvice ] = useState('');
  const [ joke, setJoke ] = useState ({ setup: '', punchline: ''});
  const [ mocktail, setMocktail] = useState({strDrink:'', strDrinkThumb: ''});
  const [ recipe, setRecipe] = useState({ strMeal:'', strInstructions:'', strIngredients:[]});
  const [ randomEvent, setRandomEvent] = useState();
  

  //Recup Citation depuis API
  function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then((res) => (res.json()))
    .then((data) => setAdvice(data.slip.advice))
    .catch((err) => console.error(err));    
  }

  //Recuperation Blagues depuis API
  function fetchJock() {
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then((res) => (res.json()))
    .then ((data) => setJoke({ setup: data.setup, punchline: data.punchline}))
    .catch((err) => console.error(err));
  }

  //Recup Mocktails depuis API
  function fetchMocktail() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
    .then((res) => (res.json()))
    .then((data) => { const randomMocktail = data.drinks[Math.floor(Math.random() * data.drinks.length)]; 
      setMocktail({ strDrink: randomMocktail.strDrink, strDrinkThumb: randomMocktail.strDrinkThumb});})
    .catch((err) => console.error(err));
  }

  //recuperer Recettes depuis API
  function fetchRecipe() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((res) =>(res.json()))
    .then((data) => {
      const recipe = data.meals[0];
      const ingredients = [];
      for (let i = 1; i <= 20; i++){
        const ingredient = recipe["strIngredient"+ i];
        const measure = recipe["strMeasure" + i];

        if(ingredient){
          let ingredientMeasure = '';
          if(measure){
            ingredientMeasure = measure+ " " + ingredient;
          } else {
            ingredientMeasure = ingredient;
          }
          ingredients.push(ingredientMeasure);
        }
      }
      setRecipe({
        strMeal: recipe.strMeal, strInstructions: recipe.strInstructions, strIngredients: ingredients
      });
    })
    .catch((err) => console.error(err));
  }

  //Recuperation Eveneemnts historique API
  function fetchEventHistorical(){
    const { day, month } = getDate();
    fetch('https://history.muffinlabs.com/date/' + (month + 1) + '/' + day)
    .then((res) =>(res.json()))
    .then((data) => {
      const events = data.data.Events;
      if (events.length >0){
        const randomEvent = Math.floor(Math.random()*events.length);
        setRandomEvent(events[randomEvent]);
      }})
    .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchAdvice();
    fetchJock();
    fetchMocktail();
    fetchRecipe();
    fetchEventHistorical();

    const intervalId = setInterval(() => {fetchAdvice(); fetchJock(); fetchMocktail(); fetchRecipe(); fetchEventHistorical()}, 60000);
    
    return () =>  clearInterval(intervalId); 
  }, [] );

  function Quotes() {
    return (
      <div>
      <h1>Quote of the day</h1>
      <p>{advice}</p>
      <br />
      <h1>Joke of the day</h1>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
      <br />
      <h1>Mocktail of the day</h1>
      <p>{mocktail.strDrink}</p>
      <img src={mocktail.strDrinkThumb} alt={mocktail.strDrink} />
      <br />
      <h1>Recipe of the day</h1>
      <p>{recipe.strMeal}</p>
      <p>{recipe.strInstructions}</p>
      <ul>
        {recipe.strIngredients.map((ingredients, index) =>(
          <li key= {index}>{ingredients}</li>
        ))}
      </ul>
      <br />
      <h1>Historical Event on this day</h1>
      <p>{ randomEvent && randomEvent.year + ' - ' + randomEvent.text}</p>
    </div>
    )
  }

  function Markdown() {
    return (
      <div className="markdownApp">
        <EditorProvider>
          <NavBarApp/>
          <MarkdownProvider>
              <MainLayout>
                <MainLayout.Column>
                    <Editor />
                </MainLayout.Column>
                <MainLayout.Column>
                  <Preview />
                </MainLayout.Column>
              </MainLayout>
          </MarkdownProvider>
          <BottomBar/>
        </EditorProvider>
      </div>

    )
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Quotes()}>
        </Route>
        <Route path="/markdown" element={Markdown()}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
