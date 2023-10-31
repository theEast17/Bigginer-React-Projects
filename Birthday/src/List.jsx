/* eslint-disable react/prop-types */

function List({ people }) {
  // whole array within it
  return (
    <>
      {people.map((people) => {
        const { id, name, age, image } = people;
        return (
          <div className="container" key={id}>
            <img src={image} alt={name} />
            <div>
              <p style={{ fontSize: "14px" }}>
                <b>{name}</b>
              </p>
              <p style={{ fontSize: "12px", color: "grey" }}>
                {age + " Years"}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default List;
