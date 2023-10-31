import { useState } from "react";
import Data from "./Data";
import Categories from "./Categories";
import Menu from "./Menu";




function App() {
  const [menuItems,setMenuItems]=useState(Data);

  const allCategories= Data.map((data)=>{
    return data.category
  })
  const unique=new Set(allCategories)

  // eslint-disable-next-line no-unused-vars
  const [categories,setCategories]=useState(["all",...unique])

  function filterFood(category){
    if(category==='all'){
      setMenuItems(Data)
      return;
    }
      const newItem=Data.filter((data)=> data.category===category)
      setMenuItems(newItem)
  }

  return (
    <>
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Our Menu</h2>
        </div>
        <Categories allCategories={categories} filterFood={filterFood}/>
        <Menu items={menuItems}/>
      </section>
    </main>
    </>
  )
}

export default App
