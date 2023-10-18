import React from 'react'
import success from '../../assets/images/successMerc.gif'
import './successRef.scss'
import { useNavigate } from 'react-router-dom'

export default function Billing() {

  let navigate = useNavigate();

  return (

  <div className="successRef">

      <div className="successPlay"> <img src={success} alt="thank you for your purchase" /> </div>

      <h1> Thank you for your purchase! </h1>

      <p>Your order has been recieved successfully and a tracking key will be sent to you once your order has beeen approved.</p>

      <div className="backtoshop" onClick={ () => navigate('/shop') } > Back to shopping   </div>

  </div>

  )
}
