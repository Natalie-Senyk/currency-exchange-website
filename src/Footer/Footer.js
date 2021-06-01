import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

class Footer extends React.Component {
  
  render() {
    return (
      <footer id="footer" className="footer">
          <div className="footer-bottom">
            <div className="container">
              <div className="flex-container">
                <div className="flex-item">
                  <h1 className="footer-title">
                    <a href="https://itgid.info">
                      2019 &copy; React. Lite Level
                    </a>
                  </h1>
                  <p> All Rights Reserved</p>
                </div>
                <div className="flex-item">
                  <div className="module-body">
                    <ul className="list-unstyled">
                      <li>
                        <Link to ="/sitemap/" tooltip="Карта сайта">
                          Sitemap
                        </Link>
                      </li>
                      <li>
                        <Link to ="/sitemaps.xml"
                          target="_blank"
                          tooltip="Google Sitemap"
                        >
                          Google Sitemap
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex-item">
                  <div className="module-body">
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to ="/">Main</Link>
                      </li>
                      <li>
                        <Link to="/contacts">Contacts</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-bar">
            <div className="flex-container">
              <div className="flex-item">
                <ul className="link"></ul>
              </div>
              <div className="flex-item">
                <div className="clearfix payment-methods">
                  <ul>
                    <img
                      src="/skin/default/images/dummy.png"
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="www.webmoney.ru"
                      alt=""
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;
