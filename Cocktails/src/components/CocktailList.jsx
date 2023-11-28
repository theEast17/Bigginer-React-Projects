import { useGlobalContext } from "../context/Context"
import { Link } from "react-router-dom";
import Loading from "./Loading"


function CocktailList() {
    const {cocktails,loading}=useGlobalContext();

    if(loading){
        return <Loading/>
    }
    if(cocktails.length<1){
        return(
            <h1 style={{letterSpacing:'1px',margin:'0 auto',textTransform:'capitalize',border:'1px solid black',width:'50vw',textAlign:'center'}}>
                no Coctails matched your Search criteria
            </h1>
        )
    }
  return (
    <section className="cocktailSection">
        <h2 className="cocktailTitle">Cocktails</h2>
        <div className="cocktail-center">
            {cocktails.map((cocktail)=>{
                const {id,name,image,info,glass}=cocktail;
                return(
                  <article key={id} className="itemCard">
                    <div className="img-container">
                        <img src={image} alt="image of ALCHOHOLE" />
                    </div>
                    <div className="detailsItems">
                        <h3>{name}</h3>
                        <h4>{glass}</h4>
                        <p>{info}</p>
                        <Link to={`/cocktailList/${id}`} className="details-btn">Details</Link>
                    </div>
                  </article>
                )
            })}
        </div>
    </section>
  )
}

export default CocktailList
