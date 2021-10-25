import react from "react";
import { Link } from "react-router-dom";
import { Route,Switch } from "react-router";

import React from 'react'
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Card from "./Card";
import Form from "./Form";

function Navbar() {
    return (
        <>
        <ul>
            <li><Link to="/Home">Home</Link><br></br></li>


            <Link to="/About">About</Link><br></br>

            <Link to="/Contact">Contact</Link><br></br>
            <Link to="/Form">Formt</Link><br></br>
            


            <Switch>
            <Route path="/Home" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Contact" component={Contact}/>

            <Route path="/Form" component={Form}/>
         

            </Switch>
            </ul>
        </>
    )
}

export default Navbar




