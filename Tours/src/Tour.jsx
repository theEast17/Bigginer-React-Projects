/* eslint-disable react/prop-types */
import { useState } from "react";

function Tour({ tour, onDelete }) {
  const [readMore, setReadMore] = useState(tour.map(() => false));

  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleReadMoreToggle = (index) => {
    const updatedReadMore = readMore.map((value, i) => (i === index ? !value : false));
    setReadMore(updatedReadMore);
  };

  return (
    <>
      <header>
        <h2>Our Tours</h2>
      </header>
      {tour.map((tour, index) => {
        const { id, name, image, info, price } = tour;
        return (
          <div className="main-container" key={id}>
            <main className="card">
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="main-content">
                <div className="details">
                  <p>{name}</p>
                  <p>${price}</p>
                </div>
                <article>
                  <p>
                    {readMore[index] ? info : `${info.slice(0, 200)}...`}
                    <button
                      className="seeMore"
                      onClick={() => {
                        handleReadMoreToggle(index);
                      }}
                    >
                      {readMore[index] ? "Show less" : "Read More"}
                    </button>
                  </p>
                </article>
              </div>
              <footer>
                <button onClick={() => handleDelete(id)}>Not Interested</button>
              </footer>
            </main>
          </div>
        );
      })}
    </>
  );
}

export default Tour;
