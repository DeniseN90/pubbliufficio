import Header from "./components/Header";
import Home from "./components/Home";
import {
  HashRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import DoveSiamo from "./components/DoveSiamo";
import LeNostreLavorazioni from "./components/LeNostreLavorazioni";
import Footer from "./components/Footer";
import Contattaci from "./components/Contattaci";
import { useSelector } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { createBrowserHistory } from "history";

function App() {
  const isMobile = useSelector((state) => state.isMobile);


  return (
    <Router>
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

function Content() {
  const history = createBrowserHistory();
  const location = useLocation();
  return (
    <div className="row">
      <TransitionGroup className="container">
        <CSSTransition
          timeout={300}
          classNames="fade"
          key={history.location.key}
        >
          <Switch location={location}>
            <Route path="/dove-siamo" component={DoveSiamo} />
            <Route path="/contattaci" component={Contattaci} />
            <Route
              path="/le-nostre-lavorazioni"
              component={LeNostreLavorazioni}
            />
            <Route path="/" component={Home} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
