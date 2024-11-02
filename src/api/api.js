function fetchAdvice() {
  return fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => data.slip.advice)
    .catch((err) => {
      console.error(err);
      throw err;
    });
}

function fetchJoke() {
  return fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((data) => ({ setup: data.setup, punchline: data.punchline }))
    .catch((err) => {
      console.error(err);
      throw err;
    });
}

function fetchMocktail() {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
  )
    .then((res) => res.json())
    .then((data) => {
      const randomMocktail =
        data.drinks[Math.floor(Math.random() * data.drinks.length)];
      return {
        strDrink: randomMocktail.strDrink,
        strDrinkThumb: randomMocktail.strDrinkThumb,
      };
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
}

function fetchRecipe() {
  return fetch("https://www.themealdb.com/api/json/v1/1/random.php")
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
      return {
        strMeal: recipe.strMeal,
        strInstructions: recipe.strInstructions,
        strIngredients: ingredients,
      };
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
}

function fetchEventHistorical() {
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDate();

  return fetch("https://history.muffinlabs.com/date/" + (month + 1) + "/" + day)
    .then((res) => res.json())
    .then((data) => {
      const events = data.data.Events;
      if (events.length > 0) {
        const numberOfEvents = Math.min(3, events.length);
        return events.slice(0, numberOfEvents);
      }
      return null;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
}

export {
  fetchAdvice,
  fetchEventHistorical,
  fetchJoke,
  fetchMocktail,
  fetchRecipe,
};
