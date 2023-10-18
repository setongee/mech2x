import React from 'react'
import './tracking.scss'
import dhl from '../../assets/images/DHL-Emblem.png'

export default function Tracking() {

  const trackCode = () => {

    const input = document.getElementById('trackCode').value

    window.location.href = `https://www.dhl.com/ng-en/home/tracking.html?tracking-id=${input}`

    document.getElementById('trackCode').value = ""

  }

  return (

    <div className='trackSection'>
        <div className="trackingPage">

            <h1>Track your shipments here</h1>
            <p>Hey there, you can track all your shipments order here and find out the status and route information </p>

            <div className="inputType">

                <input type="text" placeholder='Enter tracking code' id = 'trackCode' />
                <div className="trackBtn" onClick={ () => trackCode() } >Track</div>

            </div>

            <span>Powered by <div className="imgPin"> <img src={dhl} alt="dhl_logo" /> </div> </span>

        </div>
    </div>

  )
}
