import React from "react";
 
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>wineWithUs@vinovr.com</p>
            </div>
            <div className="d-flex">
              <a href="tel:123.456.7890">+1(347)524-9497</a>
            </div>
            <div className="d-flex">
              <p>2021 Bordeaux Ln. Cellar #1 <br></br>
                  Wine Country, 12345</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">Feature Wines</a>
                <br />
                <a className="footer-nav">My Favorites</a>
                <br />
                <a className="footer-nav">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}
 
export default Footer;