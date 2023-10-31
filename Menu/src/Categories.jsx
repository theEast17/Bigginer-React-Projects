/* eslint-disable react/prop-types */
function Categories({ allCategories, filterFood }) {
  return (
    <>
      <div className="btn-container">
        {allCategories.map((category, index) => {
          return (
            <button
              className="filter-btn"
              key={index}
              onClick={() => filterFood(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Categories;


