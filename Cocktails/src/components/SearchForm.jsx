import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context/Context"

function SearchForm() {
  const searchValue=useRef('')
  const {setSearchTerm}=useGlobalContext();
  const searchCocktail=()=>{
    setSearchTerm(searchValue.current.value);
  }
  useEffect(()=>{
    searchValue.current.focus()
  },[])
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <section className="search">
       <form className="searchForm" onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="name">search Your favorite cocktail</label>
                <input type="text" id="name" ref={searchValue} onChange={searchCocktail}/>
            </div>
       </form>
    </section>
  )
}

export default SearchForm
