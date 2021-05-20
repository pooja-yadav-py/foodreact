import React,{useState} from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Basket from './Components/Basket';


const App = () => {
  const [cartItems,setCartItems]=useState([]);
  const [cartOpen,updateCartOpen]=useState(false);
  const [selectedList,updatedSelectedList]=useState(2);
  
  return(
  <>
  <Header cartItems={cartItems} updateCartOpen={updateCartOpen}/>
  <Home cartItems={cartItems} setCartItems={setCartItems} cartOpen={cartOpen} updateCartOpen={updateCartOpen} selectedList={selectedList} updatedSelectedList={updatedSelectedList}/>
  {cartOpen && <Basket setCartItems={setCartItems} cartItems={cartItems} updatedSelectedList={updatedSelectedList} updateCartOpen={updateCartOpen}/>}
  </>
  );
}

export default App;