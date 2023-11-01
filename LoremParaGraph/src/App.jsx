import { useState } from "react";
import Data from "./Data";

function App() {
  const [lorem, setLorem] = useState([]);
  const [length, setLength] = useState(0);

  const handelSubmit = (e) => {
    e.preventDefault();
    let index=parseInt(length)
    if(index<=0){
      index=1
    }
    if(index>Data.length){
      index=Data.length
    }
    setLorem(Data.slice(0,index))   // this is very important to show data in p tag
  };

  return (
    <>
      <section className="section-center">
        <div className="title">
          <h2>Tired of Boring Lorem Ipsum?</h2>
        </div>

        <form className="loremForm" onSubmit={handelSubmit}>
          <label htmlFor="amount">Paragraphs:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <button type="submit" className="btn">
            Generate
          </button>
        </form>

        <article className="loremText">
           {
            lorem.map((text,index)=>{
              return(
                <p key={index}>{text}</p>
              )
            })
           }

        </article>
      </section>
    </>
  );
}

export default App;
