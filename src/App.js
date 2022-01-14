import React, { useState } from "react";
import "./App.css";
import Stickbar from "./components/Stickbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import FooterSection from "./components/FooterSection";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Products from "./pages/Products";
import BottomBar from "./components/BottomBar";
import PartnerCompnay from "./components/PartnerCompnay";
import { ProductsPage } from "./pages/ProductsPage";
import { FooterContainer } from "./components/FooterSection/FooterSectionElements";
import { FooterContainerBlack } from "./CONTAINERS/footer";
import ShipFlight from "./pages/shipFlieghtPage";
import ShipFlightPage from "./pages/shipFlieghtPage";
import Shipper from "./pages/Shipper";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
      <Stickbar />
      <Navbar toggle={toggle}></Navbar>

      <Switch>
        <Route exact path="/" component={Home} title="kalway" />
        <Route exact path="/Contact" component={Contact} title="BigContact" />

        <Route exact path="/About" component={About} title="BigAbout" />

        <Route
          exact
          path="/Product"
          component={Products}
          title="kalwayProduct"
        />
        <Route
          exact
          path="/products"
          component={ProductsPage}
          title="Inventory"
        />
        <Route
          exact
          path="/ShipFlight"
          component={ShipFlightPage}
          title="Inventory"
        />
        <Route exact path="/Shipper" component={Shipper} title="Inventory" />
      </Switch>

      {/* <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
      </Switch> */}
      {/* <PartnerCompnay></PartnerCompnay> */}
      {/* <PartnerCompnay></PartnerCompnay> */}

      <FooterContainerBlack />
      {/* <BottomBar></BottomBar> */}
    </Router>
  );
}

export default App;
