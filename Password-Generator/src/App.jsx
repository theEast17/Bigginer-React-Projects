import { useCallback, useEffect, useRef, useState } from "react";


// with useCallback
function App() {
    const [length, setLength] = useState(8);
    const [password,setPassword]=useState('');

    const [numberAllowed,setNumberAllowed]=useState(false)
    const [characterAllowed,setCharacterAllowed]=useState(false)

  // ref

  const copyText=useRef(null);

    const passwordGenerator=useCallback(()=>{
      let pass=''
      let string='abcdefghijklmnopqrstuvwxyzABCCDEFGHIJKLMNOPQRSTUVWXYZ'
      let char='!@#$%^&*()_+{}[]'
      let number='1234567890'

      if(numberAllowed) string+=number
      if(characterAllowed) string+=char

      for(let i=1;i<=length;i++){
        let password=Math.floor(Math.random()*string.length)
        pass+=string.charAt(password)
      }
      setPassword(pass)

    },[numberAllowed,characterAllowed,length])

    const copyTextFromInput=useCallback(()=>{
      copyText.current.select()
      window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(()=>{
      passwordGenerator();
    }, [numberAllowed,characterAllowed,length,passwordGenerator])

    return (
      <>
        <div className="bg-gray-700 my-10 w-full max-w-lg mx-auto rounded-lg px-5">
          <h1 className="text-3xl text-center text-white mb-3 pt-3">
            Password Generator
          </h1>
          <div>
            <input
              type="text"
              value={password}
              className="w-full rounded-lg p-1 outline-none mb-2"
              readOnly
              ref={copyText}
            />
            <div className="flex justify-center items-center">
              <button onClick={copyTextFromInput} className="bg-blue-700 rounded-md p-1 text-white mb-2 w-40">
                Copy
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center text-orange-500 p-2">
            <div>
              <input type="range"
              className="cursor-pointer"
              min={8}
              max={30}
              value={length}  // this is only for where the index will be onto range
              onChange={(e)=> setLength(e.target.value)}
              />
            </div>
            <div className="ml-2 px-auto" style={{width:'90px'}}>
              <label className="cursor-pointer">Length ({length})</label>
            </div>
            <div className="ml-2">
              <input type="checkbox" id="number"
              className="cursor-pointer"
              defaultChecked={numberAllowed}
              onChange={()=>{setNumberAllowed((prev)=>!prev)}}
              />
              <label htmlFor="number" className="cursor-pointer pl-1">Numbers</label>
            </div>
            <div className="ml-2">
              <input type="checkbox" id="characters"
              className="cursor-pointer"
              defaultChecked={characterAllowed}
              onChange={()=>{setCharacterAllowed((prev)=>!prev)}}
              />
              <label htmlFor="characters" className="cursor-pointer pl-1">Characters</label>
            </div>
          </div>
        </div>
      </>
    );



  // without useCallback() 
  // let [length, setLength] = useState(8);
  // let [password, setPassword] = useState("");
  // let [charAllowed,setCharAllowed]=useState(false)
  // let [numberAllowed,setNumberAllowed]=useState(false)

  // const passwordGenerator = () => {
  //   let pass=''
  //   let string = "abcdefghijklmnopqrstuvwxyzABCCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   let char = "!@#$%^&*()_+{}[]";
  //   let number = "1234567890";

  //   if (charAllowed) {
  //     string += char;
  //   }

  //   if (numberAllowed) {
  //     string += number;
  //   }

  //   for(let i=0;i<length;i++){
  //     let random=Math.floor(Math.random()*string.length)
  //     let index=string.charAt(random)
  //     pass=pass+index
  //     setPassword(pass)
  //   }
  // };

  // const copyText=useRef(null);
  // const copyTextFromInput = () => {
  //   copyText.current.select()
  //   window.navigator.clipboard.writeText(password)
  // };

  // useEffect(() => {
  //   passwordGenerator();
  // }, [length,charAllowed,numberAllowed]);

  
  // return (
  //   <>
  //     <div className="bg-gray-700 my-10 w-full max-w-lg mx-auto rounded-lg px-5">
  //       <h1 className="text-3xl text-center text-white mb-3 pt-3">
  //         Password Generator
  //       </h1>
  //       <div>
  //         <input
  //           type="text"
  //           value={password}
  //           className="w-full rounded-lg p-1 outline-none mb-2"
  //           readOnly
  //           ref={copyText}
  //         />
  //         <div className="flex justify-center items-center">
  //           <button
  //             onClick={copyTextFromInput}
  //             className="bg-blue-700 rounded-md p-1 text-white mb-2 w-40"
  //           >
  //             Copy
  //           </button>
  //         </div>
  //       </div>
  //       <div className="flex justify-center items-center text-orange-500 p-2">
  //         <div>
  //           <input
  //             type="range"
  //             className="cursor-pointer"
  //             min={8}
  //             max={100}
  //             value={length} // this is only for where the index will be onto range
  //             onChange={(e)=> setLength(e.target.value)}
  //           />
  //         </div>
  //         <div className="ml-2 px-auto" style={{ width: "90px" }}>
  //           <label className="cursor-pointer">Length ({length})</label>
  //         </div>
  //         <div className="ml-2">
  //           <input
  //             type="checkbox"
  //             id="number"
  //             className="cursor-pointer"
  //             defaultChecked={numberAllowed}
  //             onChange={()=>{setNumberAllowed((prev)=>!prev)}}
  //           />
  //           <label htmlFor="number" className="cursor-pointer pl-1">
  //             Numbers
  //           </label>
  //         </div>
  //         <div className="ml-2">
  //           <input
  //             type="checkbox"
  //             id="characters"
  //             className="cursor-pointer"
  //             defaultChecked={charAllowed}
  //             onChange={()=>{setCharAllowed((prev)=>!prev)}}
  //           />
  //           <label htmlFor="characters" className="cursor-pointer pl-1">
  //             Characters
  //           </label>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
}

export default App;
