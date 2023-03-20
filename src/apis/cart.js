
export const getCartfromDB = () => {

    const db = window.localStorage.getItem("cart");

    const dbx = JSON.parse(db)

    return dbx;

}

export const setCartInLocalStorage = () => {

    const db = window.localStorage.setItem("cart", JSON.stringify([{name : "seth"}, {name : "adeola"}]));
    //console.log(db)

}

setCartInLocalStorage()