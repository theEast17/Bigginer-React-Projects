/* eslint-disable no-unused-vars */
import { useState } from "react";
import Data from "./Data"
import List from "./List"


function App() {

  const[data,setData]=useState(Data)
  
const clearAll=((e)=>{
  e.preventDefault();
  setData([])

})

  return (
    <>
        <main>
          <section className="container">
            <h3>{data.length} birtday today</h3>
            <List people={data}/>
            <button className="mainButton" onClick={clearAll}>Clear All</button>
          </section>
        </main>
        
    </>
  )
}

export default App
