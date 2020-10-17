import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import SearchBar from './Components/SearchBar'
import Footer from './Components/Footer'
import SearchPage from './Components/SearchPage'
import Header from './Components/Header'
import Show from './Components/Show'

function App() {


  return (
    <div className="App">
      <Router>
          <Header />
      <Switch>
      <Route path='/search'>
          <SearchPage />
      </Route>
      <Route path="/show/:showId" component={Show} />
      <Route path='/'>
        <SearchBar />
        </Route>
      </Switch>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
