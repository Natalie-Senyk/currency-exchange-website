import React from "react";
import "./Nav.css";
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="header-nav">
          <div className="container">
            <nav>
              <ul>
                <li>
                  <Link to="/">Main</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to ="/contacts">Contacts</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      
    );
  }
}

export default Nav;
