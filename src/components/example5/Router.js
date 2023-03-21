import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" render={() => <Home page="home" />} />
        <Route exact path="/about" render={() => <About page="about" />} />
        <Route exact path="/contact" render={() => <Contact page="contact" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;