import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Home,
  Contact,
  Navbar,
  Achievements,
  Gallery,
  Sponsors,
  Footer
} from './components';

import ScrollToTop from './components/ScrollToTop';
import axios from 'axios';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <div className="container">
          <Switch>
            <ScrollToTop>
            <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/achievements" component={Achievements} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/sponsors" component={Sponsors} /> 
            </ScrollToTop>           
          </Switch>
        </div> 
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
