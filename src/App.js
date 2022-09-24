import Header from "./components/Header";
import Home from "./components/Home";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import DoveSiamo from "./components/DoveSiamo";
import LeNostreLavorazioni from "./components/LeNostreLavorazioni";
import Footer from "./components/Footer";
import Contattaci from "./components/Contattaci";
import { useSelector } from "react-redux";
import { CSSTransition, SwitchTransition} from "react-transition-group";
import React, { useEffect, useRef } from "react";


export default function App() {
  const isMobile = useSelector((state) => state.isMobile);

  const images = [
    {
      original:
        "https://images-pubbliufficio.s3.eu-south-1.amazonaws.com/paper.jpg",
    },
    {
      original:
        "https://images-pubbliufficio.s3.eu-south-1.amazonaws.com/paper2.jpg",
    },
    {
      original:
        "https://images-pubbliufficio.s3.eu-south-1.amazonaws.com/particolare-calendario.jpg"
    },
  ];


  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="container-fluid App">
      <div className="image-container">
        <img className="" src={images[2].original} alt="pubbliufficio homepage"/>
        <div className={isMobile ? "overlay mob" : "overlay"}></div>
      </div>
      
        <div className={isMobile ? "row Header" : "Header row mb-4 mt-4"}>
          <Header></Header>
        </div>
        <Content/>

        <div className="row mt-4 footer-container">
          <Footer></Footer>
        </div>
        <div>
          {/* WhatsApp icon */}
          <a
            href="https://wa.me/393382681254"
            className="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-whatsapp whatsapp-icon"></i>
          </a>
        </div>
      </div>
    </Router>
  );
}

export function Content() {
  const location = useLocation()
  const scrollRef = useRef(null)
  const nodeRef = useRef(null)

  useEffect(() => {
    setTimeout(() => scrollRef.current.scrollIntoView({ behavior: 'smooth'}), 800)  
  }, [location.key]);

  
  return (
    <div className="row Content" ref={scrollRef}>
      <SwitchTransition
        className="container">
        <CSSTransition
          classNames="fade"
          key={location.key}
          nodeRef={nodeRef} 
        >
          <div ref={nodeRef}>
          <Routes location={location}>
            <Route path="/dove-siamo" element={<DoveSiamo/>} />
            <Route path="/contattaci" element={<Contattaci/>} />
            <Route
              path="/i-nostri-lavori"
              element={<LeNostreLavorazioni/>}
            />
            <Route path="/" element={<Home/>} />
          </Routes>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}


