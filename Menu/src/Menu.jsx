/* eslint-disable react/prop-types */
function Menu({ items }) {
  return (
    <div className="section-center">
      {items.map((menuItems) => {
        const { id, title, price, img, desc } = menuItems;
        return (
          <article key={id} className="menu-box">
            <div className="product-details">
              <div className="foodImage">
                <img src={img} alt={title} className="foodImg" />
              </div>

              <div className="foodDetails">
                <div className="titlePrice">
                  <h4 className="titleProduct">{title}</h4>
                  <h4 className="priceProduct">${price}</h4>
                </div>
                <div className="description">
                  <p>{desc}</p>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
