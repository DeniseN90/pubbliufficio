import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/pubbliufficio-logo.png";
import logoMobile from "../assets/images/pubbliufficio-logo-mobile.png";
import logoInverted from "../assets/images/inverted-pubbliufficio-logo.png";
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

  const dispatch = useDispatch();

  const menuItems = [
    {value: 'Contattaci', link: '/contattaci'},
    {value: 'Le nostre lavorazioni', link: '/le-nostre-lavorazioni'},
    {value: 'Dove Siamo', link: '/dove-siamo'},
]



  return (
    <div>
      <div className="row Menu">
        {isMobile && !isMenuOpen ? <div  className='col-2'><GiHamburgerMenu onClick={()=> dispatch(setIsMenuOpen(!isMenuOpen))}size={40}/></div> : null}
        {isMobile && isMenuOpen ? <div className='col-2'><ImCross onClick={()=> dispatch(setIsMenuOpen(!isMenuOpen))} size={40}/></div> : null}
        <Link className="col Logo" to="/">
          <Logo></Logo>
        </Link>
        <Link className={isMobile ? 'Home ': "col Home"} to="/" onClick={()=> dispatch(setIsMenuOpen(false))}>
          {" "}
          Pubbliufficio{" "}
        </Link>

        <Link className={isMobile ? (isMenuOpen ? 'Menu-item-mobile' : 'Menu-item-mobile-closed') : "col Menu-item"} to="/contattaci" onClick={()=> dispatch(setIsMenuOpen(false))}>
          {" "}
          Contattaci
        </Link>
        <Link className={isMobile ? isMenuOpen ? 'Menu-item-mobile' : 'Menu-item-mobile-closed' : "col Menu-item"}  to="/le-nostre-lavorazioni" onClick={()=> dispatch(setIsMenuOpen(false))}>
          {" "}
          Le nostre lavorazioni
        </Link>
        <Link className={isMobile ? isMenuOpen ? 'Menu-item-mobile' : 'Menu-item-mobile-closed' : "col Menu-item"}  to="/dove-siamo" onClick={()=> dispatch(setIsMenuOpen(false))}>
          {" "}
          Dove siamo
        </Link>
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
      onMouseOver={isMobile ? logoMobile : (e) => (e.currentTarget.src = logoInverted)}
      onMouseLeave={isMobile ? logoMobile : (e) => (e.currentTarget.src = logo)}
    ></img>
  );
}
