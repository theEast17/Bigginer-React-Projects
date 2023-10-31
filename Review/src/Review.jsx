import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";
import Data from "./Data";
import { useState } from "react";

function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = Data[index];
  function minusReview() {
    setIndex((index) => {
      let newIndex = index - 1;
      // Check if newIndex is less than the first index, wrap around to last index
      if (newIndex < 0) {
        newIndex = Data.length - 1;
      }
      return newIndex;
    });
  }
  function plusReview() {
    setIndex((index) => {
      let newIndex = index + 1;
      // Check if newIndex is greater than the last index, wrap around to 0
      if (newIndex >= Data.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  }

  function randomSelect() {
    // Generate a random index
    const random = Math.floor(Math.random() * Data.length); 
    setTimeout(() => {
      setIndex(random);
    }, 300); // Adjust the timing as needed
  }
  return (
    <>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
        </div>
      </section>
      <article className='review-box'>
        <div className="imgNameOccupation">
          <div className="imgWithQuotes">
            <img src={image} alt={name} className="profile-img" />
            <div className="middle">
              <span className="quotes">
                <FaQuoteRight />
              </span>
            </div>
          </div>
          <h4 className="profile-name">{name}</h4>
          <p className="profile-job">{job}</p>
          <p className="profile-text">{text}</p>
        </div>

        <div className="Buttons">
          <button className="left-arrow" onClick={minusReview}>
            <BsChevronLeft />
          </button>
          <button className="rigth-arrow" onClick={plusReview}>
            <BsChevronRight />
          </button>
        </div>

        <button className="surprise" onClick={randomSelect}>
          Surprise Me
        </button>
      </article>
    </>
  );
}




export default Review;
