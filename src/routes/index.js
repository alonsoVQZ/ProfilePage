import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../views/About";
import Blog from "../views/Blog";
import Contact from "../views/Contact";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import Portfolio from "../views/Portfolio";
import Resume from "../views/Resume";

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/blog" Component={Blog} />
            <Route path="/contact" Component={Contact} />
            <Route path="/portfolio" Component={Portfolio} />
            <Route path="/resume" Component={Resume} />
            <Route Component={NotFound} />
        </Routes>
    </Router>
);

export default AppRoutes;