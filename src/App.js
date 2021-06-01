import React from "react";
import "./App.css";

import {Switch, Route } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Rate from "./Rate/Rate";
import About from "./About/About";
import NotFound from "./NotFound/NotFound";
import Contacts from "./Contacts/Contacts";

class App extends React.Component {
  render() {
    return (
      <div className="site">
        <Header />
        <div className="container">
          <main>
            
              <Switch>
                <Route exact path="/" component={Rate} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contacts" component={Contacts} />
                <Route component={NotFound} />
              </Switch>
            
          </main>
        </div>

        <div className="container" id="cookie_info">
          <div className="site-content">
            <div className="well">
              The website uses cookie to collect technical information
              <br /> We use cookies to improve user experience and offer more
              personalization based on your IP address and location.&nbsp;
              <button className="btn btn-primary btn-sm">OK</button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
