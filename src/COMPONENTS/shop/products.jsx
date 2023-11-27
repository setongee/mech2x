import React,{useState, useEffect} from 'react'
import { addProductToCart, getCartfromDB } from '../../apis/cart'

export default function Products({products, mix}) {


const addToCart = () => {

    addProductToCart(products.uid);
    setAddedToCart(true);

}

const [addedToCart, setAddedToCart] = useState(false);

useEffect(() => {

    
    getCartfromDB()
    .then( (e) => {

        const lo = e.filter(  res => {
            return res.id === products.uid
        }  )

        if (lo.length) setAddedToCart(true);

    } )
    

}, []);


  return (

    <div className="product">

        <div className="imageProd">

            <img src= {products.data.photo} alt="" />

        </div>

        <div className="contentDeep">

            <div className="productTitle"> 
            
                <div className="title_sz">{products.data.ProductName}</div> 
                
            </div>


            <div className="price_sz">

                <div className="price"> &#8358; {Number(products.data.price).toLocaleString()} </div>
                
                <div className="sizes">

                    {
                        products.data.sizes.map( (data, index) => <div key = {index} className="size">{data}</div> )
                    }

                </div>

            </div>



        </div>

        {
            addedToCart ? <div className="addBag addedToBag" > Added to bag </div> : <div className="addBag" onClick={ () => addToCart() } >Add to Bag</div>
        }

    </div>

  )

}
