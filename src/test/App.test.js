import { render, fireEvent, screen } from "./test-utils";
import App from "../App";
import Home from "../components/Home";
import Contattaci from "../components/Contattaci";
import LeNostreLavorazioni from "../components/LeNostreLavorazioni";
import DoveSiamo from "../components/DoveSiamo";

test("renders Pubbliufficio HomePage title", () => {
  render(<App />);
  expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
});



test("renders Home contents", () => {
  render(<Home/>);
  const homeItems = screen.getAllByTitle("home-paragraph");
  for (let i = 0; i < homeItems.length; i++) {
    expect(homeItems[i]).toBeInTheDocument();
  }
});

test("renders Contattaci contents", () => {
  render(<Contattaci/>);
  expect(screen.getByText(/Invia/i)).toBeInTheDocument();
  
});


test("renders LeNostreLavorazioni contents", () => {
  render(<LeNostreLavorazioni/>);
  expect(screen.getByTitle("page-title")).toBeInTheDocument();
});

test("renders DoveSiamo contents", () => {
  render(<DoveSiamo/>);
  expect(screen.getByTitle("page-title")).toBeInTheDocument();
});