import { useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const [totalItems, setTotalItems] = useState(0);

  const addOneMoreItem = () => {
    setTotalItems((prev) => {
      return prev + 1;
    });
  };

  const removeOneItem = () => {
    setTotalItems((prev) => {
      return prev - 1;
    });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {" "}
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li className={classes.cartListItems} key={item.id}>
          <div className={classes.cartItemName}>
            {item.name}
            <div>
              <button
                className={classes.addRemoveItem}
                onClick={addOneMoreItem}
              >
                +
              </button>
              <button className={classes.addRemoveItem}
                onClick={removeOneItem}
              >
                -
              </button>
            </div>
          </div>
          <div className={classes.itemPrices}>
            ${item.price}
            <button className={classes.addRemoveItem}>
              x{totalItems}
            </button>
          </div>
        </li>
      ))}{" "}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <div>{cartItems}</div>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>$32.66</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
