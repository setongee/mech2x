import React from 'react'

export default function CartItem() {
  
    return (
        
        <div className="item">

            <div className="product_img">
                <img src="https://firebasestorage.googleapis.com/v0/b/merchcreations-15ff6.appspot.com/o/categories%20%2F%20paperboy%20crossbag%20%2F%20merccreator_product_ida-7127.jpg?alt=media&token=10a9d4c2-6ed6-4845-8745-dba0bfdb387c" alt="product image" />
            </div>

            <div className="content">

                <div className="product_name"> Tote Bag Product </div>
                
                <div className="priceStock"> 
                    
                    <span class = 'inStock' >In Stock</span></div>
                
                <div className="pool">

                    <div className="sizes">

                        <select name="size" id="size">
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                        </select>

                    </div>

                    <div className="quantity">

                        <div className="decreaseQuantity"> - </div>
                        <p> 4 </p>
                        <div className="increaseQuantity"> + </div>

                    </div>

                    <div className="trash">
                        <i className="fi fi-sr-trash"></i>
                    </div>

                </div>

            </div>

            <div className="price"> N45,000  </div>

        </div>
  )

}
