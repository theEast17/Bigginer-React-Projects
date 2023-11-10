import Values from "values.js";
import SingleColor from "./SingleColor";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [val,setVal]=useState(10)
  const [error, setError] = useState(false);
  const [list,setList]=useState(new Values('#f15025').all(val))

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setError(false)
      let colors=new Values(color).all(val)
      setList(colors)
    } catch (error) {
      setError(true)
    }
   
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error?'error':null}`}
          />
          <button type="submit">Generate</button>
        </form>
        <p style={{margin:'0 auto',fontWeight:'600',letterSpacing:'.6px'}}>Click to Copy In ClipBoard</p>
      </section>

      <section className="main">
        <SingleColor list={list}/>
      </section>
    </>
  );
}

export default App;
