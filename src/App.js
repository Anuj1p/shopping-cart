import React, {useState, useEffect, useReducer} from 'react';
import axios from 'axios';
import './App.css';
import { cartReducer } from './reducers/cartReducer';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: []
  });

  console.log(state);

  const fetchProducts = async() => {
    const {data} = await axios.get("https://dummyjson.com/products")
    // console.log(data.products);
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products
    })
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
