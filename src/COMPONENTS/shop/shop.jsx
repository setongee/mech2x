import React,{useEffect, useState} from 'react'
import { getProducts } from '../../apis/shop';
import Products from './products';
import './shop.scss'
import { useLocation, useNavigate, redirect} from 'react-router-dom';

export default function ShopHome({category, limit, classFix, view}) {


    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false)
    let location = useLocation()

useEffect(() => {

    setLoad(true)


    getProducts(category.data.categoryName)
    .then(e => {

        setProducts(e.data);

        setTimeout(() => {

            setLoad(false)
            
        }, 500);

    })



}, [category.data.categoryName]);




  return (

    

    <div className="shopHome">

        {
            load && location.pathname === '/shop' ? <div className="bigLoader">
            Loading...
        </div> : null
        }

      

       <div className="headerCat">

            <h1> {category.data.displayName} </h1> 
            
            {
                view ? <p onClick={ () => window.location.href = `/shop?filters=${category.data.categoryName}` } > View All <i className="fi fi-rr-arrow-right"></i> </p> : null
            }

       </div>



        <div className="lineStr_xl"></div>

        <div className={`products homeMade ${classFix}`}>

            {
                products.length ? products.map( (data, index) => {

                    if (index <= limit ) {

                        return <Products products = {data} key = {index} />

                    }

                } ) : null
            }

        </div>

    </div>

  )
}
