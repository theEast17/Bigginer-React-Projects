import { useState } from "react"
import Data from "./Data"
import Review from "./Review";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [people,setPeople]=useState(Data);

  return (
    <>
          <section className="section">
              <div className="title">
                <h1>Review</h1>
              </div>
              <Review people={people}/>
          </section>
    </>
  )
}

export default App
