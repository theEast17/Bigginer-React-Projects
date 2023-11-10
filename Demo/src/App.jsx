// git add <filename>
// git commit -m 'anytext'
// git remote add 'link'
// git push origin main

/* eslint-disable react/no-unescaped-entities */
import { useRef, useState, useEffect } from "react";

function Counter() {
  // ---------------useRef Hook----------------------//
  // ref to dom Element

  // const render = useRef(null);
  // const duration = 2; // Set the duration of the transition (in seconds)
  // const initialWidth = 0; // Initial width

  // const startCounter = () => {
  //   render.current.style.width = '300px';
  //   render.current.style.height = '300px';
  //   render.current.style.background='black'
  //   render.current.style.transition = `all ${duration}s ease`;
  // };
  // const removeCounter = () => {
  //   render.current.style.width = initialWidth;
  //   render.current.style.height = initialWidth;
  //   render.current.style.transition = `all ${duration}s ease`;
  // };

  // return (
  //   <div>
  //     <div ref={render} style={{ width: initialWidth, height: initialWidth ,border:'1px solid black'}}></div>
  //     <button onClick={startCounter}>Start Counter</button>
  //     <button onClick={removeCounter}>Remove Counter</button>
  //   </div>
  // );

  // does not causes re-renders
  // const [inputValue, setInputValue] = useState("");
  // const count = useRef(0);

  // useEffect(() => {
  //   count.current = count.current + 1;
  // });

  // return (
  //   <>
  //     <input
  //       type="text"
  //       value={inputValue}
  //       onChange={(e) => setInputValue(e.target.value)}
  //     />
  //     <h1>Render Count: {count.current}</h1>
  //   </>
  // );

  // Tracking State Changes
  // const [inputValue, setInputValue] = useState("");
  // const previousInputValue = useRef("");

  // useEffect(() => {
  //   previousInputValue.current = inputValue;
  // }, [inputValue]);

  // return (
  //   <>
  //     <input
  //       type="text"
  //       value={inputValue}
  //       onChange={(e) => setInputValue(e.target.value)}
  //     />
  //     <h2>Current Value: {inputValue}</h2>
  //     <h2>Previous Value: {previousInputValue.current}</h2>
  //   </>
  // );

  // ---------------useState Hook----------------------//
  // const [count, setCount] = useState(0);     //when we want to render everytime

  // const [count,setCount]=useState(()=> {        //this is better than above ! we can also pass a function here
  //   return 0
  // });

  // const [obj,setObj]=useState({counter:0});

  // let a=obj.counter;

  // function aincrease(){
  //   setObj((prevValue)=>{
  //     return {counter:prevValue.counter+1}
  //   })
  // }

  // function adecrease(){
  //   setObj((prevValue)=>{
  //     return {counter:prevValue.counter-1}
  //   })
  // }

  // function increase(){
  //   setCount((prevValue)=>{
  //     return prevValue+1;
  //   })
  // }

  // function decrease(){
  //   setCount((prevValue)=>{
  //     return prevValue-1;
  //   })
  // }

  // return (
  //   <>
  //     <button onClick={decrease}>-</button>
  //     <span>{count}</span>
  //     <button onClick={increase}>+</button><br />

  //     <button onClick={adecrease}>-</button>
  //     <span>{a}</span>
  //     <button onClick={aincrease}>+</button>
  //   </>
  // );

  // ---------------useEffect Hook----------------------//

  // -------------1st Example--------------------------------------
  // const [resource, setResource] = useState("posts");
  // const [display, setDisplay] = useState([]);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resource}`)
  //     .then((response) => response.json())
  //     .then((json) => setDisplay(json));
  //   //
  // }, [resource]);

  // return (
  //   <>
  //     <button
  //       onClick={() => {
  //         setResource("posts");
  //       }}
  //     >
  //       Posts
  //     </button>
  //     <button
  //       onClick={() => {
  //         setResource("users");
  //       }}
  //     >
  //       Users
  //     </button>
  //     <button
  //       onClick={() => {
  //         setResource("comments");
  //       }}
  //     >
  //       Comments
  //     </button>

  //     <h2>{resource}</h2>

  //     <p>
  //       {display.map((item, index) => {
  //         return (
  //         <>
  //         <pre key={index}>{JSON.stringify(item)}</pre>;
  //         </>
  //         )

  //       })}
  //     </p>

  //
  //   </>
  // );

  // -------------2nd Example--------------------------------------

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, []);

  // return (
  //   <>
  //     <h1>I've rendered {count} times!</h1>
  //   </>
  // )

  // -------------3rd Example--------------------------------------
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeWindow);

    return ()=> window.removeEventListener('resize',resizeWindow)
  }, [windowWidth]);

  return (
    <>
      <p>{windowWidth}</p>
    </>
  );
}

export default Counter;
