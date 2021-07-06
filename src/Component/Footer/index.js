import React, { Component, lazy } from 'react'

class Dashboard extends Component {

  render() {
    return (
      <>
        <footer class="footer-area bg-gray">
          <div class="container-fluid footer-cont">
            <div class="container pt-100 pb-40">
              <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-3">
                  <div class="copyright mb-30 ">
                    <div class="footer-logo">
                      <a href="index.html">
                        <h5 class="logo-heading footer-logo-heading">WatchTrade</h5>
                      </a>
                    </div>
                    <p class="pt-60">But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will give you a complete account of
                      the system, and expound the actual teachings of the great explorer of the truth.</p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3">
                  <div class="footer-widget mb-30 text-center">
                    <div class="footer-title">
                      <h3>Auctions</h3>
                    </div>
                    <div class="footer-list pt-50">
                      <ul>
                        <li><a href="#">Live Auctions</a></li>
                        <li><a href="#">Coming Soon</a></li>
                        <li><a href="#">Recently Sold</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3">
                  <div class="footer-widget mb-30 ml-30">
                    <div class="footer-title">
                      <h3>Company</h3>
                    </div>
                    <div class="footer-list pt-50">
                      <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                        <li onClick={()=>this.props.ChangeView('ContactUs')}><a href="#">Contact us</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3">
                  <div class="footer-widget mb-30 ">
                    <div class="footer-title">
                      <h3>Sell with WatchTrade</h3>
                    </div>
                    <div class="footer-list pt-50">
                      <ul>
                        <li onClick={()=>this.props.ChangeView('SellWatch')}><a href="#">Sell Now</a></li>
                        <li onClick={()=>this.props.ChangeView('About')}><a href="#">About Watch Trade</a></li>
                        <li onClick={()=>this.props.ChangeView('SellWatch')}><a href="#">Sell Now</a></li>
                        <li onClick={()=>this.props.ChangeView('Faqs')}><a href="#">FAQ's</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid footer-end-cont">
            <div class="container m-auto">
              <div class="row">
                <div class="col-md-4">
                  <p class="white footer-end-p">WatchTrade © 2021</p>
                </div>
                <div class="col-md-8">
                  <div>
                    <ul class="last-footer footer-end-ul">
                      <li><a href="#">English (UK)</a></li>
                      <li><a href="#">ภาษาไทย</a></li>
                      <li><a href="#">中文(简体)</a></li>
                      <li><a href="#">한국어</a></li>
                      <li><a href="#">日本語</a></li>
                      <li><a href="#">Français (France)</a></li>
                      <li><a href="#">Español</a></li>
                      <li><a href="#">Deutsch</a></li>
                      <li><a href="#">Italiano</a></li>
                      <li><a href="#">Português (Brasil)</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </>
    );
  }
}

export default Dashboard;
