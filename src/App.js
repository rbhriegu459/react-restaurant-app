import { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/cart-provider';

function App() {
  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  }

  const hideCartHandler = () => {
    setCartShown(false);
  }

  return (
    <CartProvider>
      {cartShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart ={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
