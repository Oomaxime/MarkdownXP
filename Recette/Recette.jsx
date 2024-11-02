/* eslint-disable no-unused-vars */
import  { useEffect, useState } from 'react';
import { fetchRecipe } from '../../api/api';


import './Recette.css'
function Recette()  {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);




  useEffect(() => {
    fetchRecipe()
      .then((data) => {
        setRecipe(data);
      })
      .catch((err) => {
        setError("Erreur lors de la récupération de la recette");
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!recipe) {
    return <div>Chargement de la recette...</div>;
  }

  return (
    <div className='Recette' >


      <header className='Menu_recipe'>
        <h1>Marmiton</h1>
        <nav>
          <ul className='liste_Menu'>
            <li>Home</li>
            <li>Category</li>
            <li>Acount</li>
          </ul>
        </nav>
      </header>
      <h2 className='title_Ingrediant' >{recipe.strMeal}</h2>


      <div className='pub_organisation'>
        
      <img className='pub' src='/src/assets/images/pub_2.png'></img>
        <img className='pub' src='/src/assets/images/image.png'></img>
        <img className='gif' src='/src/assets/images/6e71ad8476a3bad639882dc26c191c7a.gif'></img>
      </div>
      

      <div className='search_section' >
        <input className='search_class' type='search' placeholder='search'/>
        <button className='search_button'>Search</button>
      </div>

      <div className='ListMeal'>


        <div className='organisations'>


          <div className='border'>
            <h2 className='title_Ingrediant' >Ingrédients:</h2> 
            <ul className='liste'>
              {recipe.strIngredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className='border'>
            <h2 className='title_Ingrediant' >Instructions:</h2>
            <p> {recipe.strInstructions}</p>
          </div>
        </div>

     
      </div>
      <footer className='footer'>
        <img className='footer_img' src='/src/assets/images/black_friday.jpg'></img>
      </footer>

    </div>

  );
};

export default Recette;
