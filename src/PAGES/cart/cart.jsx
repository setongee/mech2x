import React,{useState, useEffect} from 'react'
import './cart.scss'
import CartItem from './cartItem';
import { deleteProductFromCart, getAllCartProducts, getCartfromDB } from '../../apis/cart';
import { getSingleProduct } from '../../apis/shop';
import { useNavigate } from 'react-router-dom';
import {states} from './NigeriaAPI'
import emptybag from '../../assets/images/emptybag.svg'
import PaystackPaymentModal from './paystackPaymentModal';

export default function Cart() {

  let navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [cartAction, action] = useState(false);
  const [price, setPrice] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [loader, setLoader] = useState(false);
  const [billingModal, setBillingModal] = useState(false)
  const [showPay, setShowPay] = useState(false);
  const [formErr, setFormErr] = useState(true);

  const initialData = {

    firstname : "",
    lastname : "",
    stateResidence : "abia",
    email : "",
    phone : "",
    lgaResidence : ""

  }

  const [shipping, setShipping] = useState(initialData);


  const closePayment = () => {

    setShowPay(false);

  }


  const validateFields = () => {


    const AllInputs = document.querySelectorAll('.nameGame input');

    const inputsArr = Array.from(AllInputs);
    
    inputsArr.forEach(res => {

      res.parentElement.classList.remove('errorForm');
      //res.parentElement.lastElementChild.remove();

      if (res.value === "") {

        res.parentElement.classList.add('errorForm');
        const para = res.parentElement.querySelector('p');
        para.classList.add = 'error_message'
        para.textContent = "This field is required..."

      }

      else if (res.id === "email") {

        var x = res;
        var atpos=x.value.indexOf("@");
        var dotpos=x.value.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)

          {

            res.parentElement.classList.add('errorForm');
            const para = res.parentElement.querySelector('p');
            para.classList.add = 'error_message';
            para.textContent = "Invalid email address...";

            return false;

          } else {  setShowPay(true); }

      } 

    })

    //showPayment();
    
  }

  const showPayment = () => {

    if (!formErr) setShowPay(true);

  }


  const OpenBilling = () => {

    setBillingModal(true);

  }

  const CloseBilling = () => {

    setBillingModal(false);
    setShipping(initialData);

  }

  const handleChange = e => {

    const {id, value} = e.target;

    setShipping( res => {

      return {

          ...res,
          [id] : value

      }

    });

  }



  const deleteItem = (puid) => {

    deleteProductFromCart(puid);
    action(!cartAction);
    changeBagEffect();

  }

  const childActivity = () => {

    action(!cartAction);

  }

  const changeBagEffect = () => {

    setLoader(true);
    setCart([]);

    setTimeout(() => {

      getCartfromDB()
      .then( res => {

      setCart(res);
      cartPrice(res);
      
      setLoader(false);
    
      })

      const cartPrice = (prices) => {

        let total = prices.reduce(function (previousValue, currentValue) {
    
            return previousValue + (Number(currentValue.price) * currentValue.quantity);
    
    
        }, 0);
    
    
        setPrice(total)
    
      } 
      
    }, 1000);

  }

  
  useEffect( () => {
    
  getCartfromDB()
  .then( res => {

    setCart(res);
    cartPrice(res);


    const getStates = () => {

      document.getElementById('stateResidence').innerHTML = ''

      const ID = document.getElementById('stateResidence');

      if(ID !== null) {
          states.forEach(data => {

              const node = document.createElement("option");
  
              node.value = data.alias;
              node.innerText = data.state
  
              ID.appendChild(node)
  
          })
      }

  }

  const getStatesLGA = () => {

      document.getElementById('lgaResidence').innerHTML = '';

      if (shipping.stateResidence !== ""){

          const res = states.filter((e) => {
              return e.alias === shipping.stateResidence
          })

      const IDL = document.getElementById('lgaResidence');


      if(IDL !== null) {

          res[0].lgas.forEach(data => {

              const node = document.createElement("option");
  
              node.value = data.toLowerCase();
              node.innerText = data
  
              IDL.appendChild(node)
  
          })
      }
      }

  }


  if (billingModal) {

    getStates(); 
    getStatesLGA();

  }
  

  } );

  const cartPrice = (prices) => {

    let total = prices.reduce(function (previousValue, currentValue) {

        return previousValue + (Number(currentValue.price) * currentValue.quantity);


    }, 0);


    setPrice(total)

  }


  }, [cartAction, shipping.stateResidence, billingModal]);


  return (
    
    <div className="cart">

        { showPay ? <PaystackPaymentModal shipping = {shipping} price = {price} delivery = {delivery} closePayment={closePayment} cart = {cart} /> : null }

        {

            billingModal ? 

            <div className="shippingDetails">

            <div className="billArea">

                <div className="tag">Add your shipping details</div>
                <p>Kindly fill out your shipping address for payment</p>

                <div className="closeBilling" onClick={ () => CloseBilling() } > <i className="fi fi-rr-cross-small"></i> </div>

                <div className="form">

                      <div className="fullname">


                          <div className="nameGame">

                            <label> Firstname* </label>
                            <input type="text" value={shipping.firstname} id = 'firstname' onChange={ handleChange } autoFocus required placeholder='Enter Firstname'/>
                            <p></p>

                          </div>

                          <div className="nameGame">

                            <label> Lastname* </label>
                            <input type="text" value={shipping.lastname} id = 'lastname' onChange={ handleChange } required placeholder='Enter Lastname'/>
                            <p></p>
                            
                          </div>


                      </div>

                      <div className="nameGame">

                        <label> Email* </label>
                        <input type="email" value={shipping.email} id = 'email' onChange={ handleChange } required placeholder='Enter Email Address'/>
                        <p></p>
                        
                      </div>

                      <div className="nameGame">

                        <label> Phone* </label>
                        <input type="text" value={shipping.phone} id = 'phone' onChange={ handleChange } required placeholder='Enter Telephone Number' />
                        <p></p>
                        
                      </div>

                      <div className="nameGame">

                        <label> Address Street* </label>
                        <input type="text" value={shipping.street} id = 'street' onChange={ handleChange } required placeholder='Enter Full Delivery Address Street' />
                        <p></p>
                        
                      </div>

                      <div className="nameGame">

                        <label> Country* </label>

                        <select name="country" id="country" value={shipping.country}>

                            <option value='nigeria' selected > Nigeria </option>

                        </select>
                        
                      </div>

                      <div className="fullname">

                          <div className="nameGame">

                            <label> State* </label>
                            <select name="stateResidence" id="stateResidence" onChange={handleChange} value={shipping.stateResidence} ></select>
                            
                          </div>

                          <div className="nameGame">

                            <label> LGA*</label>
                            <select name="lgaResidence" id="lgaResidence" onChange={handleChange} value={shipping.lgaResidence} ></select>
                            
                          </div>


                      </div>

                    </div>


                    <div className="priceBreak">

                      <div className="am">
                        <div className="q">Amount</div>
                        <div className="a">N{price.toLocaleString()}.00</div>
                      </div>

                      <div className="am">
                        <div className="q">Delivery Fee</div>
                        <div className="a">N{delivery.toLocaleString()}.00</div>
                      </div>

                      <div className="am last">
                        <div className="q">Total</div>
                        <div className="a"> N{(price + delivery).toLocaleString()}.00 </div>
                      </div>

                      <div className="paynow" onClick={ () => validateFields() }> Proceed to payment </div>

                    </div>


            </div>

        </div> : null

        }

        <div className="cartHolder">

            <div className="totalPrice_xl">

                <div className="continueShopping" onClick={ () => navigate('/shop') } >  <i className="fi fi-rr-arrow-left"></i> <p>Continue Shopping</p> </div>

                <div className="totalFeed">  

                  <div className='totalBill'> <p>Subtotal :</p> N{price.toLocaleString()}.00 </div>

                </div>

            </div>

            <div className="shoppingBag">

                <div className="heading"> My Shopping Bag  
                
                  {
                    cart.length ? <div className="cartLength" onClick={ () => OpenBilling() } > Checkout <i className="fi fi-rr-arrow-right"></i> </div> : <div className="cartLength disabled"> Checkout <i className="fi fi-rr-arrow-right"></i> </div>
                  }
                
                </div>

                

                <div className="cartItems">

                    {
                        cart.length ? 
                        cart.map( (data, index) => {

                            return <CartItem data = {data} deleteProduct = {deleteItem} key = {index} index = {index} activity = {childActivity} />

                        } )
                        : <div className="noneCart"> 
                            <img src={emptybag} alt="Oops, you have no item in the cart" /> 
                            <p>Oops, you have no items in your bag</p>
                          </div>
                    }

                </div>

            </div>

            

        </div>

        

    </div>

  )

}
