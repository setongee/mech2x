import React,{useState, useEffect} from 'react'
import './cart.scss'
import CartItem from './cartItem';

export default function Cart() {

  const [cart, setCart] = useState([]);

  const getCartItems = () => {


  }

  const deleteItem = () => {

  }

  const increaseQuantity = () => {

  }

  const decreaseQuantity = () => {

  }

  const calculateAmount = () => {

  }

  return (
    
    <div className="cart">

        <div className="cartHolder">

            <div className="heading">My Bag</div>

            <div className="cartItems">

                <CartItem />

                <CartItem />

                <CartItem />

            </div>

            <div className="totalPrice">
                <p>Total Bag Price</p>
                <p className='totalBill'>N134,980</p>
            </div>

            <div className="checkout">
                <div className="proceed"> <i className="fi fi-sr-credit-card"></i> Proceed to Checkout</div>
                <div className="continue" onClick={ () => window.location.href = '/shop' }> <i className="fi fi-sr-shopping-bag-add"></i> Continue Shopping</div>
            </div>

        </div>

    </div>

  )

}
