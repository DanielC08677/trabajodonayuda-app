// Import React
import React from "react";
// Import Boostrap
import {Navbar,Nav,Image,Carousel} from "react-bootstrap";
// Import Views
import HomeView from "./views/HomeView";
import DonantesView from "./views/DonantesView";
import FundacionesView from "./views/FundacionesView";
// Import React Router Dom
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";

import LogoApp from "./assets/img/Donayuda.jpg";
function App() {
  return (
      <Router>
        <Navbar className="navbar-custom" expand="lg">
        <Navbar.Brand href="#home">
          <Image src={LogoApp} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="custom-link" to="/" >Home</Link>       
            <Link className="custom-link" to="/Donantes" >Donantes</Link> 
            <Link className="custom-link" to="/Fundaciones" >Fundaciones</Link>     
          </Nav>        
         </Navbar.Collapse>
         </Navbar>
         <switch>
           <Route exact={true} path="/" component ={HomeView}/> 
           <Route path="/Donantes" component ={DonantesView}/> 
           <Route path="/Fundaciones" component ={FundacionesView}/> 
         </switch>
      </Router>
  );
}

export default App;
