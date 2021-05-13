import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DoveSiamo from "./components/DoveSiamo";
import LeNostreLavorazioni from "./components/LeNostreLavorazioni";
import Footer from "./components/Footer";
import Contattaci from "./components/Contattaci";
import { useSelector } from "react-redux";


function App() {
  const isMobile = useSelector((state) => state.isMobile);
  return (
    <Router>
      <div className="container-fluid App">
        <div className={isMobile ? "row" : "row mb-4"}>
          <Header></Header>
        </div>
        <div className="row">
          <Switch>
            <Route path="/dove-siamo" component={DoveSiamo} />
            <Route path="/contattaci" component={Contattaci} />
            <Route
              path="/le-nostre-lavorazioni"
              component={LeNostreLavorazioni}
            />
            <Route path="/" component={Home} />
          </Switch>
        </div>
        <div className="row mt-4">
          <Footer></Footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
