import React, {useState, useEffect} from 'react'
import ShopHome from '../../COMPONENTS/shop/shop'
import { getCategory } from '../../apis/shop';
import './shopPage.scss'

export default function Shop() {

  const [ shopCategories, setShopCategories ] = useState([])

  useEffect(() => {
 
   getCategory().then(e => {
 
     //const shuffleArr = e.sort((a, b) => 0.5 - Math.random())
 
     setShopCategories(e.reverse());
 
   })
 
  }, []);

  return (


      <div className="shopArea shopping">

            <h1 className="bigShop"> Shop</h1>

            <div className="catArea">

                {
                  shopCategories.length ? shopCategories.map( (data, index) => {

                    return <ShopHome key = {index} category = {data} limit = {3000} classFix = "shopLand" view = {false} />

                  } ) : null
                }

            </div>

        </div>


  )
}
