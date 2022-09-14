import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/pubbliufficio-logo-menu.png";
import logoMobile from "../assets/images/pubbliufficio-logo-mobile.png";
import { useDispatch, useSelector } from "react-redux";
import { GiHamburgerMenu }  from 'react-icons/gi';
import { ImCross } from 'react-icons/im'
import { setIsMenuOpen } from '../redux/pubbliufficio-store'

function Header() {
  return (
    <div className="Header">
      <div className="row">
        <Menu></Menu>
      </div>
    </div>
  );
}

export default Header;

function Menu() {
  const isMobile = useSelector((state) => state.isMobile);
  const isMenuOpen = useSelector((state) => state.isMenuOpen);

  const menuItems = [
    {
      path: '/contattaci',
      displayName: 'Contattaci'
    }, 
    {
      path: '/i-nostri-lavori',
      displayName: 'I nostri lavori'
    }, {
      path: '/dove-siamo',
      displayName: 'Dove siamo'
    }]

  const dispatch = useDispatch();

  return (
    <div>
      <div className="row Menu">
        {isMobile && !isMenuOpen ? <div  className='col-2'><GiHamburgerMenu onClick={()=> dispatch(setIsMenuOpen(!isMenuOpen))}size={30}/></div> : null}
        {isMobile && isMenuOpen ? <div className='col-2'><ImCross onClick={()=> dispatch(setIsMenuOpen(!isMenuOpen))} size={30}/></div> : null}
        <Link className="col Logo" to="/">
          <Logo></Logo> 
        </Link>
        <Link className={isMobile ? 'Home ': "col Home"} to="/" onClick={()=> dispatch(setIsMenuOpen(false))}>
          {" "}
          Pubbliufficio{" "}
        </Link>
        {menuItems.map(( item, index ) => (
                <Link key={index} className={isMobile ? (isMenuOpen ? 'Menu-item-mobile' : 'Menu-item-mobile-closed') : "col Menu-item"} to={item.path} onClick={()=> dispatch(setIsMenuOpen(false))}>
                {" "}
                {item.displayName}
                </Link>
          ))}
        
      </div>
    </div>
  );
}

function Logo() {
  const isMobile = useSelector((state) => state.isMobile);
  return (
    <img
      className="Logo-image"
      alt="logo"
      src={isMobile ? logoMobile : logo}
    ></img>
  );
}
