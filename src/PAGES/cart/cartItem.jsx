import React,{useEffect, useState} from 'react'
import { getSingleProduct } from '../../apis/shop';
import { updateProductQuantity, updateProductSize } from '../../apis/cart';

export default function CartItem({data, deleteProduct, index, activity}) {

    const [ productInfo, setProductInfo ] = useState({

        ProductName : "",
        category : "",
        categoryName : "",
        description : "",
        id : "",
        photo : "",
        price : "",
        sizes : []

    });



    const [quantity, setQuantity] = useState(data.quantity);
    const [price, setPrice] = useState(data.price);
    const [preferredSize, setPreferredSize] = useState("");
    const [coverPhoto, setCoverPhoto] = useState('#')



    useEffect(() => {
        
       setProductInfo(data);
       setPrice(Number(data.price) * quantity);
       setPreferredSize(data.preferredSize);

       const cover = data.photo;
        const coverImage = Object.values(cover)[0];
        setCoverPhoto(coverImage);

    }, [quantity]);


    const addQuantity = () => {

        setQuantity(quantity + 1);

        const newPrice =  Number(data.price) * quantity
        setPrice(newPrice);

        updateProductQuantity(index, quantity + 1)
        .then( () => activity() )
        //.catch( e => console.error(e.message) );

    }

    const changeSize = (e) => {

        setPreferredSize(e.target.value);

        updateProductSize(index, e.target.value)
        .then( () => {activity();} )
        // .catch( e => console.error(e.message) );

    }
     

    const decreaseQuantity = () => {

        if (quantity > 1) {

            setQuantity(quantity - 1);

            const newPrice =  Number(data.price) * quantity
            setPrice(newPrice);

            updateProductQuantity(index, quantity - 1)
            .then( () => activity() )
            // .catch( e => console.error(e.message) );

        };

    }



  
    return (
        
        <div className="item" id = { productInfo.id } >


            <div className="content">

                <div className="product_img">
                    <img src={coverPhoto} alt="product image" />
                </div>

                <div className="product_name"> 

                    {/* content Name */}
                
                    <div className="newName">

                        <div className="naming">
                            {productInfo.ProductName} 
                        </div>

                        <div className="flex_day">
                            <div className="categ">

                            {productInfo.category} 
                            
                        </div>

                        </div>

                        <div className="sizes">

                        <div className="newZone">

                            <select name="size" id="size" value = {preferredSize} onChange={ e => changeSize(e) } >

                                {
                                    Object.values(productInfo.sizes).map( (size, index) => {

                                        return <option value={size} key = {index} > { size.toUpperCase() } </option>

                                    } )
                                }

                            </select>

                            <div className="pool">

                                <div className="quantity">

                                    <div className="decreaseQuantity" onClick={ decreaseQuantity } > <i className="fi fi-sr-minus"></i> </div>
                                    <p> {quantity} </p>
                                    <div className="increaseQuantity" onClick = { addQuantity } > <i className="fi fi-sr-plus"></i> </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    </div>

                    {/* End of Content Naming */}

                    {/* Quantity Section */}

                    
                    {/* End of quantity Section */}

                    

                
                </div>


            <div className="price"> 
            
                <div className="pricePillow">
                    N{ Number(price).toLocaleString() }
                </div>
                            
                <div className="trash" onClick = { () => deleteProduct(productInfo.id) } >

                    <i className="fi fi-rr-cross-small"></i>

                </div>
                
            </div>

        </div>

        </div>
  )

}
