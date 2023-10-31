import { useState } from "react";

export default function Section() {
    let [color,setColor]=useState('black');
  return (
    <>
        
      <div style={{ height: "100vh", width: "100%", background: color ,transition:'all .3s ease'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'20px',padding:'10px',height:'50px',width:'70%',background:'white',borderRadius:'5px',position:'absolute',top:'70%',left:'16%'}}>
          <button onClick={()=>setColor('red')} >Red</button>
          <button onClick={()=>setColor('blue')} >Blue</button>
          <button onClick={()=>setColor('yellow')} >Yellow</button>
          <button onClick={()=>setColor('white')} >White</button>
          <button onClick={()=>setColor('purple')} >Purple</button>
          <button onClick={()=>setColor('green')} >Green</button>
          <button onClick={()=>setColor('orange')} >Orange</button>
        </div>
      </div>
    </>
  );
}
