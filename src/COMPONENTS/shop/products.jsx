import React,{useState, useEffect} from 'react'
import { addProductToCart, getCartfromDB } from '../../apis/cart'

export default function Products({products, mix}) {

const addToCart = () => {

    addProductToCart(products.uid);
    setAddedToCart(true);

}

const [addedToCart, setAddedToCart] = useState(false);
const [coverIndex, setCoverIndex] = useState(0)

useEffect(() => {

    
    getCartfromDB()
    .then( (e) => {

        const lo = e.filter(  res => {
            return res.id === products.uid
        }  )

        if (lo.length) setAddedToCart(true);

    } )
    
}, []);


const productPhoto = () => {

    

}


  return (

    <div className="product">

        <div className="imageProd">

            <img src= {Object.values(products.data.photo)[coverIndex]} alt="" />

        </div>

        <div className="otherPics"> 

            {
                Object.values(products.data.photo).map((pics, index) => {

                    return <div key = {index} className="picsOther" onClick={ () => setCoverIndex(index) }> <img src={pics} alt={index} /> </div>

                })
            }
            

        </div>

        <div className="contentDeep">

            <div className="productTitle"> 
            
                <div className="title_sz">{products.data.ProductName}</div> 
                
            </div>


            <div className="price_sz">

                <div className="price"> &#8358; {Number(products.data.price).toLocaleString()} </div>
                
                <div className="sizes">

                    {
                        Object.entries(products.data.sizes).map( ( data, index ) => <div key = {index} className="size"> {data[1]} </div> )
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
