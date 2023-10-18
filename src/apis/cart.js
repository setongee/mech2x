import { getSingleProduct } from "./shop";
import axios from "axios";

export const getCartfromDB = async () => {

    const db = window.localStorage.getItem("cart");

    if (db !== null) {

        const dbx = JSON.parse(db);
        return dbx;

    } else {

        return [];
        
    }

}


export const getCartfromDBNumber = () => {

    const db = window.localStorage.getItem("cart");
    
    if (db !== null) {

        const dbx = JSON.parse(db);
        return dbx.length;

    } else {

        return [];
        
    }

}

export const clearCart = async () => {

    window.localStorage.setItem("cart", JSON.stringify([]));

}


export const addProductToCart =async (req, size) => {

    const db = window.localStorage.getItem("cart");
    
    if (db !== null) {

        const dbx = JSON.parse(db);
        const arr = dbx;

        await getSingleProduct(req).then( res => arr.push( { ...res.data , quantity : 1, preferredSize : res.data.sizes[0] }));
        window.localStorage.setItem("cart", JSON.stringify(arr));

    } else {

        const newArr = [];

        await getSingleProduct(req).then( res => newArr.push( { ...res.data , quantity : 1, preferredSize : res.data.sizes[0] }));
        window.localStorage.setItem("cart", JSON.stringify(newArr) );

    }

}


export const updateProductQuantity = async (index, quantity) => {

    const db = window.localStorage.getItem("cart");
    const dbx = JSON.parse(db);

    dbx[index].quantity = quantity;

    window.localStorage.setItem("cart", JSON.stringify(dbx));
    
}

export const updateProductSize = async (index, size) => {

    const db = window.localStorage.getItem("cart");
    const dbx = JSON.parse(db);

    console.log(size)

    dbx[index].preferredSize = size;

    window.localStorage.setItem("cart", JSON.stringify(dbx));
    
}

export const deleteProductFromCart = (puid) => {

    const db = window.localStorage.getItem("cart");
    const dbx = JSON.parse(db);


    const remainProducts = dbx.filter( e => {

        return e.id !== puid;

    } )

    window.localStorage.setItem("cart", JSON.stringify(remainProducts));

}


