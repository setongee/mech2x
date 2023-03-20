import React,{useEffect, useState} from 'react'
import { getProducts } from '../../apis/shop';
import Products from './products';
import './shop.scss'

export default function ShopHome({category, limit, classFix, view}) {

    const [products, setProducts] = useState([]);

    //console.log(category.data.displayName)
    //console.log(category.data.categoryName)

useEffect(() => {

    getProducts(category.data.categoryName)
    .then(e => {

        setProducts(e.data)

    })

}, []);

   <div className="d">shop</div>


  return (

    

    <div className="shopHome">

      

       <div className="headerCat">

            <h1> {category.data.displayName} </h1> 
            
            {
                view ? <p onClick={ () => window.location.href = '/shop' } > View All <i className="fi fi-rr-arrow-right"></i> </p> : null
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
