import React from "react";
import Nav from "./shophere/Navbar/Nav";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Home from "./shophere/Components/Home";
import Products from "./shophere/Components/Products";
import About from "./shophere/Components/About";
import Cart from "./shophere/Components/Cart";
import Contact from "./shophere/Components/Contact";

class App extends React.Component{

    render(){
        return <div>
            <Router>
                <Nav />
                <Routes>
                    <Route path='Home' element={<Home/>}/>
                    <Route path='Products' element={<Products/>}/>
                    <Route path='About' element={<About/>}/>
                    <Route path='Cart' element={<Cart/>}/>
                    <Route path='Contact' element={<Contact/>}/>
                </Routes>
            </Router>
            <Home />
            <Products />
        </div>
    }
}

export default App