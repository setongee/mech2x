import React from 'react';
import {Routes, Route, useNavigate, useRe} from 'react-router-dom'
import Home from '../PAGES/home/home';
import Tracking from '../PAGES/tracking/tracking';
import Shop from '../PAGES/shop/shop';
import Cart from '../PAGES/cart/cart';
import Billing from '../PAGES/cart/billing';

const RouterClass = ({cartFunc}) => {

    

    return (

        <Routes>

            <Route path = "/">

                <Route path='' element = {<Home/>} />
                <Route path='/shop' element = {<Shop cartFunc = {cartFunc} />} />
                <Route path='/tracking' element = {<Tracking/>} />
                <Route path='/cart' element = {<Cart/>} />
                <Route path='/cart/success/ref' element = {<Billing/>} />

                {/* 404 Page Not Found */}
                <Route path="*" element = {<h1>Page not found</h1>} />

            </Route>

            
        </Routes>

    );
}

export default RouterClass;
