import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const getCocktail = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      if (data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newCockTail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        };
        setCocktail(newCockTail);
      } else {
        setCocktail(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getCocktail();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="title">no cocktail to display</h2>;
  }

  const { name, image, info, category, glass, instructions, ingredients } =
    cocktail;
  return (
    <section className="cocktail-section">
      <Link
        to="/"
        className="cocktail-btn"
        style={{ marginTop: "3rem", marginBottom: "3rem" }}
      >
        Back To home
      </Link>
      <h2 className="section-title">{name}</h2>

      <div className="gridContainer">
        <div className="img-container">
          <img
            src={image}
            alt="image of ALCHOHOLE"
            style={{ borderRadius: "4px" }}
          />
        </div>

        <div className="drinkInfo">
          <p>
            <span className="ingridients-title">name:</span>
            {name}
          </p>
          <p>
            <span className="ingridients-title">category:</span>
            {category}
          </p>
          <p>
            <span className="ingridients-title">info:</span>
            {info}
          </p>
          <p>
            <span className="ingridients-title">glass:</span>
            {glass}
          </p>
          <p>
            <span className="ingridients-title">instructions:</span>
            {instructions}
          </p>
          <p>
            <span className="ingridients-title">ingredients:</span>
            {ingredients.map((ingredient, index) => {
              return ingredient ? (
                <span key={index}>{ingredient}, </span>
              ) : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

export default SingleCocktail;
