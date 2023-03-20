import React,{useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './header.scss'
import mercLogo from '../../assets/logo/merc_logo.svg'
import {getCartfromDB} from '../../apis/cart'

const Header = () => {

  let location = useLocation()
  let navigate = useNavigate()
  
  const [pathname, setPathname] = useState(location.pathname);

  //;logic for menu state

  const [menuState, setMenuState] = useState(false)

  const openMenu = () => {

    setMenuState(true)

  }

  const closeMenu = () => {
    setMenuState(false);
  }


  useEffect(() => {
    
    switch (pathname) {

      case "/":
        {
          const active = document.querySelector('.active');
          const current = document.querySelector('.home');
  
          if (active === null) {
            current.classList.add("active");
          } else {
            active.classList.remove('active');
            current.classList.add("active")
          }
        }
        break;
  
        case "/shop":
          {
            const active = document.querySelector('.active');
            const current = document.querySelector('.shop');
    
            if (active === null) {
              current.classList.add("active");
            } else {
              active.classList.remove('active');
              current.classList.add("active")
            }
          }
          break;

          case "/tracking":
            {
              const active = document.querySelector('.active');
              const current = document.querySelector('.tracking');
      
              if (active === null) {
                current.classList.add("active");
              } else {
                active.classList.remove('active');
                current.classList.add("active")
              }
            }
            break;
        
     
      default:
        {
          const active = document.querySelector('.active');
  
          if (active === null) {
    
          } else {
            active.classList.remove('active');
          }
        }
        break;
     }

     closeMenu();

  }, [pathname]);



  return (

   <div className="header">

      {
        menuState ? (

          <div className="mobileMenuOverlay">

          <div className="closeBtn" onClick={ () => closeMenu() } ><i class="fi fi-rr-cross-circle"></i></div>
  
            <div className="navigationSection">
  
                <a href="/home" className="home nav_link"> Home  </a>
                <a href="/shop" className="shop nav_link"> Shop  </a>
                <a href="/tracking" className="tracking nav_link"> Tracking  </a>
  
            </div>
  
        </div>

        ) : null
      }

      <div className="mainDesktop">

        <div className="logoArea" onClick={ () => {navigate('/'); setPathname('/')} }>
          <img src={mercLogo} alt="Merc Logo" />
        </div>

        <div className="navigationSection">

          <a href="/" className="home nav_link"> Home  </a>
          <a href="/shop" className="shop nav_link"> Shop  </a>
          <a href="/tracking" className="tracking nav_link"> Tracking  </a>

        </div>

        <div className="cartSection" onClick={ () => { navigate('/cart'); setPathname('/cart')} } >

          <div className="cartIcon">

            <i className="fi fi-sr-shopping-bag"></i>

          </div>

          <div className="cartNumber">0</div>

        </div>

      </div>

      <div className="mainMobile"> 
      
        <div className="logoArea">

          <div className="hamburger" onClick={ () => openMenu() }>

            <i class="fi fi-sr-menu-burger"></i>

          </div>

          <div className="logo_px">
            <img src={mercLogo} alt="Merc Logo" />
          </div>

        </div>

        <div className="cartSection">

          <div className="cartIcon">

            <i className="fi fi-sr-shopping-bag"></i>

          </div>

          <div className="cartNumber">0</div>

        </div>

      </div>

   </div>

  )

}

export default Header;
