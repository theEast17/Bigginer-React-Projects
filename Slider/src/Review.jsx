/* eslint-disable react/prop-types */
import { FaQuoteRight } from "react-icons/fa";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useEffect, useState } from "react";

function Review({ people }) {
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    const lastIndex=people.length-1;
    if(index<0){
      setIndex(lastIndex)
    }
    if(index>lastIndex){
      setIndex(0)
    }
  },[index,people])

  useEffect(()=>{
    const slider=setInterval(()=>{
      setIndex(index+1)
    },3000)
    return (()=>clearInterval(slider))
  },[index])

  return (
    <>
      <div className="section-center">
        {people.map((people, peopleIndex) => {
          const { id, image, name, title, quote } = people;
          // more stuff is coming
          let position='nextSlide';
          if(peopleIndex===index){
            position='activeSlide'
          }
          if(peopleIndex === index-1 || (index===0 && peopleIndex===people.length-1)){
            position='lastSlide'
          }
          return (
            <>
              <article className={`reviewBox ${position}`} key={id}>
                <img src={image} alt={name} className="reviewImg" />
                <h4 className="reviewName">{name}</h4>
                <p className="reviewTitle">{title}</p>
                <p className="reviewQuote">{quote}</p>
                <p className="reviewIcon">
                  <FaQuoteRight />
                </p>
              </article>
            </>
          );
        })}

        <button className="left" onClick={()=>setIndex(index-1)}>
          <AiFillCaretLeft />
        </button>
        <button className="right" onClick={()=>setIndex(index+1)}>
          <AiFillCaretRight />
        </button>
      </div>
    </>
  );
}

export default Review;
