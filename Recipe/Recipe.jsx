/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { fetchRecipe } from "../../api/api";
import "./Recipe.css";

function Recipe() {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  // Fetch API
  useEffect(() => {
    fetchRecipe()
      .then((data) => {
        setRecipe(data);
      })
      .catch((err) => {
        setError("Error while fetching recipe");
      });
  }, []);
  //  Refresh la page de l'Api
  const handleRefreshAPIRecipe = () => {

    // Fetch api on click button
    fetchRecipe()
    .then((data) => {
      setRecipe(data);
    })
    .catch((err) => {
      setError("Error while fetching recipe");
    });

  };
  // Handle right-click to display custom context menu
  const handleRightClick = (event) => {
    event.preventDefault(); 
    setMenuPosition({ x: event.pageX + -300, y: event.pageY + -70 });
    setMenuVisible(true);
  };
  // Hide menu on left click
  const handleClickOutside = () => {
    setMenuVisible(false);
  };

  // Detect load API or not
  if (error) {
    return <div>{error}</div>;
  }

  if (!recipe) {
    return <h1>Recipe loading...</h1>;
  }

  return (
    <div onContextMenu={handleRightClick} onClick={handleClickOutside} className="Recipe">
      <header className="Menu_recipe">
        <h1>Marmiton</h1>
        <nav>
          <ul className="liste_Menu">
            <li>Home</li>
            <li>Category</li>
            <li>Account</li>
          </ul>
        </nav>
      </header>
      
      <h2 className="title_Meal">{recipe.strMeal}</h2>

      <div className="pub_organisation">
        <img className="pub" src="/src/assets/images/pub_2.png" alt="pub" />
        <img className="pub" src="/src/assets/images/image.png" alt="image" />
        <img className="gif" src="/src/assets/gifs/recipe/chef.gif" alt="chef gif" />
      </div>

      <div className="search_section">
        <input className="search_class" type="search" placeholder="search" />
        <button className="search_button">Search</button>
      </div>

      <div className="ListMeal">
        <div className="organisations">
          <div className="border">
            <h2 className="title_Ingrediant">Ingrédients:</h2>
            <ul className="list">
              {recipe.strIngredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className="border">
            <h2 className="title_Ingrediant">Instructions:</h2>
            <p>{recipe.strInstructions}</p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <img
          className="footer_img"
          src="/src/assets/images/black_friday.jpg"
          alt="Black Friday"
        />
      </footer>

{/* Menu Right-Click */}
{menuVisible && (
  <ul className="context-menu"
    style={{
      top: `${menuPosition.y}px`, 
      left: `${menuPosition.x}px`, 
      position: "absolute"
    }}
  >
    <li className="context-menu-nav"  >Inspect element</li>
    <li className="context-menu-nav"  >Show page source code</li> 
    <li className="context-menu-nav"  >Print</li>
    <li className="context-menu-nav"  >Save as</li>
    <li onClick={handleRefreshAPIRecipe}  className="context-menu-nav"  >Refresh</li>  
  </ul>
)}
    </div>
  );
}

export default Recipe;
