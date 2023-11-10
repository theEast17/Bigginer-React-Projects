/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */

import { useState } from "react"

// import rgbToHex from "./Util"

function SingleColor({list}) {
  return (
    <div className="colorContainer">
     {list.map((color,indexColor)=>{
            const [alert,setAlert]=useState(false);

            // eslint-disable-next-line no-unused-vars
            const {rgb,weight,index,hex}=color
            const stringColor=rgb.join(',')
            const hexValue=`#${hex}`
            // const hex=rgbToHex(...rgb);
        return(
            <article  className={`${indexColor > 9 ? 'color-light':null}`}
            key={indexColor} 
            style={{backgroundColor:`rgb(${stringColor})`}}
            onClick={()=>{
                navigator.clipboard.writeText(hexValue)
                setAlert(true);
                const timeout=setTimeout(()=>{
                    setAlert(false)
                },1000)

                return ()=>clearTimeout(timeout)
            }}
            >
                <p className="percent-value">{weight}%</p>
                <p className="color-value">{hexValue}</p>
                {alert && <p className={`${indexColor > 9 ? 'color-light':null}`}>copied To clipBoard</p>}
            </article>
        )
     })} 
    </div>
  )
}
// {`${index>10?'light':null}`}
export default SingleColor
