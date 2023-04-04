import React, {useState, useEffect} from 'react'
import ShopHome from '../../COMPONENTS/shop/shop'
import { getCategory } from '../../apis/shop';
import { useLocation, useNavigate} from 'react-router-dom';
import './shopPage.scss'

export default function Shop() {

  const [ shopCategories, setShopCategories ] = useState([]);
  const [ shopCategoriesDemo, setShopCategoriesDemo ] = useState([]);
  const [filterValue, setFilterValue] = useState('all');
  const [filtersArr, setFiltersArr] = useState([]);


  let location = useLocation()
  let navigate = useNavigate()

  useEffect(() => {

    //window.location.href = '/shop?filters=all'
    
  }, []);

  useEffect(() => {

 
   getCategory().then(e => {
 
     //const shuffleArr = e.sort((a, b) => 0.5 - Math.random());
     setFiltersArr(e)
     setShopCategoriesDemo(e.reverse());
     setShopCategories(e);
     navigate('/shop?filters=all')

   })
 
  }, []);

  
  useEffect(() => {
    
    console.log(location.search.split("=")[1]);
    
    const map = shopCategoriesDemo.filter( e => {

      return e.data.id === filterValue

    } )

    setShopCategories(map);

    if (filterValue === 'all') {

      setShopCategories(shopCategoriesDemo)

    }

  }, [filterValue]);

  return (


      <div className="shopArea shopping">

            <div className="shoppingHeader">

              <h1 className="bigShop"> My Shop</h1>

              <div className="filters">

                <div className= {`filter all ${ location.search.split("=")[1] === "all"? 'current' : '' }`}  onClick = { () => { navigate('/shop?filters=all'); setFilterValue("all")} }> All </div>

                {

                  filtersArr.length ? filtersArr.map( data => {

                    return <div className= {`filter ${data.data.id} ${ location.search.split("=")[1] === data.data.id ? 'current' : '' }`} onClick = { () => { navigate(`/shop?filters=${data.data.id}`); setFilterValue(data.data.id) } } >  {data.data.displayName} </div>

                  } ) : null

                }
                

              </div>

            </div>

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
