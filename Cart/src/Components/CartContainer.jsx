import { useGlobalContext } from "../Context/Context";
import { RxCaretUp } from "react-icons/rx";
import { RxCaretDown } from "react-icons/rx";

function CartContainer() {
  const { cart,total,clearCart,removeItem,increase,decrease } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty...!</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>

      <article className="productsContainer">
        {cart.map((product) => {
          const { id, title, price, img, amount } = product;
          return (
            <div className="productsDetails" key={id}>
              <div className="productImg">
                <img src={img} alt="ProductImage" />
              </div>

              <div className="flex">
                <div className="productDescription">
                  <h4>{title}</h4>
                  <p>${price}</p>
                  <button className="removeProduct" onClick={()=>removeItem(id)}>remove</button>
                </div>

                <div className="increaseDecrease">
                  <button className="increase" onClick={()=>increase(id)}>
                    <RxCaretUp />
                  </button>
                  <p>{amount}</p>
                  <button className="decrease" onClick={()=>decrease(id)}>
                    <RxCaretDown />
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        <footer>
          <div className="cart-total">
            <h4>Total</h4>
            <p><strong>${total}</strong></p>
          </div>

          <button onClick={clearCart}>
            clear cart
          </button>
        </footer>
      </article>
    </section>
  );
}

export default CartContainer;
