import {React, useState, useEffect} from 'react'
import './App.css';
import Header from './COMPONENTS/header/header';
import RouterClass from './routes/router';
import { register } from 'swiper/element/bundle';

register();


function App() {

  const [cart, setCart] = useState(true);

  const pullCart = (data) => {
    console.log(data);
  }
  
  return (

    <div className="App">

      <Header cart = {cart} />

      <div className="container">

          <RouterClass cartFunc = {pullCart} />

      </div>
      
    </div>
  );
  
}

export default App;
