import React from 'react'
import { usePaystackPayment } from 'react-paystack';
import mercLogo from '../../assets/logo/merc_logo.svg'
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../apis/cart';
import { addSuccessfulOrder } from '../../apis/shop';


export default function PaystackPaymentModal({shipping, price, delivery, closePayment, cart}) {

    const live_key = 'pk_live_99d322807edd18dffe32153e5c6fdff623665876';
    const test_key = "pk_test_3bf17d5bf39878cc53b53a151648c3d404936307"

    let navigate = useNavigate()

    const amount = price + delivery;

    const config = {

        reference: (new Date()).getTime().toString(),
        email: shipping.email,
        amount: amount * 100,
        publicKey: live_key,

    };

    const onSuccess = (reference) => {

        addSuccessfulOrder({products : cart, ref : reference, shipping : shipping, totalAmount : amount })
        .then( () => {

            clearCart();
            navigate('/cart/success/ref')

        } );

    };

    const onClose = () => {
        console.log('closed')
    }

    
    
    const PaystackHookExample = () => {

        const initializePayment = usePaystackPayment(config);
        
        return (

            <div className="payPayNow">

                <div className="checkoutpay">

                    <div className="logoCart"> <img src={mercLogo} alt="cart images" /> </div>
                    <p>Hey <strong>{shipping.firstname}</strong>, you are about to make a payment of</p>
                    <h1>N{(price + delivery).toLocaleString()}.00</h1>
                    <div className="h1Line"></div>
                    <p>By clicking and continueing the button below, you will be redirected to our payment portal to initiate payment via different payment options.</p>
                    <div className="paystackPay" onClick={ () => initializePayment(onSuccess, onClose)} > Great! Make Payment </div>

                </div>

                <div className="goBackDir" onClick={closePayment} >Cancel</div>
                
            </div>

        );
    };


  return (

    <PaystackHookExample/>

  )
}
