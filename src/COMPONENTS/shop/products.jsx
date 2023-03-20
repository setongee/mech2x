import React,{useState, useEffect} from 'react'

export default function Products({products}) {

    console.log(products.data)

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

        <div className="addBag">Add to Bag</div>

    </div>

  )

}
