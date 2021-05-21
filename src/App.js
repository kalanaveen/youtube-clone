import React from 'react';
import './App.css';
import Header from './components/Header';
import Recommended from './components/Recommended';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage/>
            </div>
          </Route>
          <Route exact path="/">
            <div className="app__page">
              <Sidebar />
              <Recommended/>
            </div>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
