import React from 'react';
import {Routes, Route, useNavigate, useRe} from 'react-router-dom'
import Home from '../PAGES/home/home';
import Tracking from '../PAGES/tracking/tracking';
import Shop from '../PAGES/shop/shop';
import Cart from '../PAGES/cart/cart';

const RouterClass = () => {

    return (

        <Routes>

            <Route path = "/">

                <Route path='' element = {<Home/>} />
                <Route path='/shop' element = {<Shop/>} />
                <Route path='/tracking' element = {<Tracking/>} />
                <Route path='/cart' element = {<Cart/>} />

                {/* 404 Page Not Found */}
                <Route path="*" element = {<h1>Page not found</h1>} />

            </Route>

            
        </Routes>

    );
}

export default RouterClass;
