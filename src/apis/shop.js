import axios from 'axios'

const liveUrl = "https://starfish-app-l54sf.ondigitalocean.app"
const testUrl = "http://localhost:3300"

const currentUse = liveUrl;

export const getCategory = async () => {

    var dataPack = [];

    await fetch(`${currentUse}/api/v1/category`)
    .then((response) => response.json())
    .then((data) => dataPack = data );

    return dataPack;

}

export const getACategory = async (category) => {

    var dataPack = [];

    await fetch(`${currentUse}/api/v1/category/${category}`)
    .then((response) => response.json())
    .then((data) => dataPack = data );


    return dataPack;

}

export const getProducts = async (category) => {

    var dataPack = [];

    await fetch(`${currentUse}/api/v1/${category}/products`)
    .then((response) => response.json())
    .then((data) => dataPack = data );


    return dataPack;

}

export const getAllProducts = async (category) => {

    var dataPack = [];

    await fetch(`${currentUse}/api/v1/${category}/products`)
    .then((response) => response.json())
    .then((data) => dataPack = data );


    return dataPack;

}

export const getSingleProduct = async (puid) => {

    var dataPack = [];

    await fetch(`${currentUse}/api/v1/products/${puid}`)
    .then((response) => response.json())
    .then((data) => dataPack = data );

    return dataPack;

}

export const addSuccessfulOrder = async (data) => {

    axios.post( `${currentUse}/api/v1/orders/add`, data );

}