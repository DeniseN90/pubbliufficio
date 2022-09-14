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
import { TransitionGroup, CSSTransition } from "react-transition-group";
import React, { useRef } from "react";


export default function App() {
  const isMobile = useSelector((state) => state.isMobile);


  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="container-fluid App">
        <div className={isMobile ? "row" : "row mb-4"}>
          <Header></Header>
        </div>
        <Content/>

        <div className="row mt-4">
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
  const location = useLocation();

  const nodeRef = useRef(null)
  return (
    <div className="row">
      <TransitionGroup 
        
        className="container">
          
        <CSSTransition
          timeout={2000}
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
      </TransitionGroup>
    </div>
  );
}


