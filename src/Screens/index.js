import React, { Component, lazy } from 'react'
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CProgress,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import './style.css'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import Dashboard from './Dashboard/Dashboard'
import Faqs from './FAQs/Faqs'
import About from './About/About'
import ContactUs from './Contact/ContactUs'
import NoWatchState from './NoWatchState/NoWatchState'
import SellWatch from './SellWatch/SellWatch'
import AccountBid from './AccountBid/AccountBid'
import AccountBilling from './AccountBilling/AccountBilling'
import Cookie from 'universal-cookie';
import { toast } from 'react-toastify';
import AccountListing from './AccountListing/AccountListing'
import {
  CModal,
  CModalBody,
  CModalHeader,
  CModalFooter,
  CModalTitle,
} from '@coreui/react';
import AccountProfile from './AccountProfile/AccountProfile'
import AccountWatchList from './AccountWatchList/AccountWatchList'
import WatchDetailLostAuction from './WatchDetailLostAuction/WatchDetailLostAuction'
import WatchDetailWonAuction from './WatchDetailWonAuction/WatchDetailWonAuction'
import WatchDetailWonAuction1 from './WatchDetailWonAuction1/WatchDetailWonAuction1'
import WatchDetail from './WatchDetail/WatchDetail'
import { LoginPost } from '../Controllers/DashboardController'

class MainApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "Dashboard",
      email: "",
      password: "",
      loginModal: false
    };

  }

  ChangeView = (viewRequest) => {
    if (viewRequest === "Dashboard") {
      this.setState({ screen: 'Dashboard' });
    }
    if (viewRequest === "About") {
      this.setState({ screen: 'About' });
    }
    if (viewRequest === "Faqs") {
      this.setState({ screen: 'Faqs' });
    }
    if (viewRequest === "ContactUs") {
      this.setState({ screen: 'ContactUs' });
    }
    if (viewRequest === "SellWatch") {
      this.setState({ screen: 'SellWatch' });
    }
    if (viewRequest === "AccountBid") {
      this.setState({ screen: 'AccountBid' });
    }
    if (viewRequest === "AccountBilling") {
      this.setState({ screen: 'AccountBilling' });
    }
    if (viewRequest === "AccountListing") {
      this.setState({ screen: 'AccountListing' });
    }
    if (viewRequest === "AccountProfile") {
      this.setState({ screen: 'AccountProfile' });
    }
    if (viewRequest === "AccountWatchList") {
      this.setState({ screen: 'AccountWatchList' });
    }
    if (viewRequest === "WatchDetailLostAuction") {
      this.setState({ screen: 'WatchDetailLostAuction' });
    }
    if (viewRequest === "WatchDetailWonAuction") {
      this.setState({ screen: 'WatchDetailWonAuction' });
    }
    if (viewRequest === "WatchDetailWonAuction1") {
      this.setState({ screen: 'WatchDetailWonAuction1' });
    }
    if (viewRequest === "WatchDetail") {
      this.setState({ screen: 'WatchDetail' });
    }
  }
  toggleLogin = () => {
    this.setState({ loginModal: !this.state.loginModal })
  }
  toggleProductDetail = () => {

  }
  setValue = (event) => {
    let target = event.target;
    if (target.name === "email") {
      this.setState({ email: target.value })
    }
    if (target.name === "password") {
      this.setState({ password: target.value })
    }

  }
  submitForm = async () => {
    var cookie = new Cookie();
    if (this.state.email !== "" && this.state.password !== "") {
      let res = await LoginPost(this.state.email, this.state.password)
      if (res) {
        var userCookie = {
          accessToken: res.token,
          refreshToken: ""
        };
        cookie.set("user", JSON.stringify(userCookie));
        localStorage.setItem('userDetail', JSON.stringify(res.user));
        console.log(res);
        this.toggleLogin()
      }
    } else {
      alert('Invalid Username/Password.')
    }
  }
  render() {
    return (
      <>
        {this.state.screen === "Dashboard" && <Dashboard ChangeView={this.ChangeView} toggleLogin={this.toggleLogin} />}
        {this.state.screen === "About" && <About ChangeView={this.ChangeView} toggleLogin={this.toggleLogin}/>}
        {this.state.screen === "Faqs" && <Faqs ChangeView={this.ChangeView} toggleLogin={this.toggleLogin}/>}
        {this.state.screen === "ContactUs" && <ContactUs ChangeView={this.ChangeView} toggleLogin={this.toggleLogin}/>}
        {this.state.screen === "SellWatch" && <SellWatch ChangeView={this.ChangeView} toggleLogin={this.toggleLogin}/>}
        {this.state.screen === "AccountBid" && <AccountBid ChangeView={this.ChangeView} toggleLogin={this.toggleLogin}/>}
        {this.state.screen === "AccountListing" && <AccountListing ChangeView={this.ChangeView} toggleLogin={this.toggleLogin}/>}
        {this.state.screen === "AccountBilling" && <AccountBilling ChangeView={this.ChangeView} toggleLogin={this.toggleLogin}/>}
        {this.state.screen === "AccountProfile" && <AccountProfile ChangeView={this.ChangeView} toggleLogin={this.toggleLogin}/>}
        {this.state.screen === "AccountWatchList" && <AccountWatchList ChangeView={this.ChangeView} toggleLogin={this.toggleLogin}/>}
        {this.state.screen === "WatchDetailLostAuction" && <WatchDetailLostAuction ChangeView={this.ChangeView} toggleLogin={this.toggleLogin}/>}
        {this.state.screen === "WatchDetailWonAuction" && <WatchDetailWonAuction ChangeView={this.ChangeView} toggleLogin={this.toggleLogin}/>}
        {this.state.screen === "WatchDetailWonAuction1" && <WatchDetailWonAuction1 ChangeView={this.ChangeView} toggleLogin={this.toggleLogin}/>}
        {this.state.screen === "WatchDetail" && <WatchDetail ChangeView={this.ChangeView} toggleLogin={this.toggleLogin}/>}



        <CModal
          closeOnBackdrop={true}
          show={this.state.loginModal}
          onClose={this.toggleLogin}
          centered
          closeButton
        >
          <CModalHeader closeButton>
            
          </CModalHeader>
          <CModalBody className="modalText">
            
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <h4 class="mb-60 text-center login-modal-sign">Sign in to WatchTrade</h4>
              </div>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <form action="#" class="form-control login-modal-form">
                  <input type="text" class="form-control login-email" placeholder="Email Address" />
                  <div class="form-group mt-20">
                    <div class="input-group" id="show_hide_password">
                      <input class="form-control login-password" placeholder="Password"
                        type="password" />
                      <div class="input-group-addon">
                        <a href=""><i class="fa fa-eye-slash" aria-hidden="true"></i></a>
                      </div>
                    </div>
                  </div>
                  <a href="#">Forget Password?</a>
                  <button class="login-btn mt-30 mb-25" type="submit">Login to Account</button>
                  <div class="sideline">OR</div>
                  <div class="social-login-content mt-30 mb-25">
                    <div class="social-button">
                      <button class="google-btn mb-15"><i class="fab fa-google mr-20"></i>Login with
                        Google</button>
                      <button class="facebook-btn"><i class="fab fa-facebook mr-20"></i>Login with
                        Facebook</button>
                    </div>
                  </div>
                </form>

              </div>
            </div>
               
          </CModalBody>
        </CModal>
        <CModal
          closeOnBackdrop={false}
          show={false}
          onClose={this.toggleProductDetail}
          centered
        >
          <CModalBody className="modalText">
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                      aria-hidden="true">x</span></button>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-md-5 col-sm-12 col-xs-12">
                        <div class="tab-content quickview-big-img">
                          <div id="pro-1" class="tab-pane fade show active">
                            <img src={require('../assets/img/product/quickview-l1.jpg')} alt="" />
                          </div>
                          <div id="pro-2" class="tab-pane fade">
                            <img src={require('../assets/img/product/quickview-l2.jpg')} alt="" />
                          </div>
                          <div id="pro-3" class="tab-pane fade">/
                            <img src={require('../assets/img/product/quickview-l3.jpg')} alt="" />
                          </div>
                          <div id="pro-4" class="tab-pane fade">
                            <img src={require('../assets/img/product/quickview-l2.jpg')} alt="" />
                          </div>
                        </div>
                        <div class="quickview-wrap mt-15">
                          <div class="quickview-slide-active owl-carousel nav nav-style-1" role="tablist">
                            <a class="active" data-toggle="tab" href="#pro-1"><img
                              src={require('../assets/img/product/quickview-s1.jpg')} alt="" /></a>
                            <a data-toggle="tab" href="#pro-2"><img src={require('../assets/img/product/quickview-s2.jpg')}
                              alt="" /></a>
                            <a data-toggle="tab" href="#pro-3"><img src={require('../assets/img/product/quickview-s3.jpg')}
                              alt="" /></a>
                            <a data-toggle="tab" href="#pro-4"><img src={require('../assets/img/product/quickview-s2.jpg')}
                              alt="" /></a>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-7 col-sm-12 col-xs-12">
                        <div class="product-details-content quickview-content">
                          <h2>Products Name Here</h2>
                          <div class="product-details-price">
                            <span>$18.00 </span>
                            <span class="old">$20.00 </span>
                          </div>
                          <div class="pro-details-rating-wrap">
                            <div class="pro-details-rating">
                              <i class="fa fa-star-o yellow"></i>
                              <i class="fa fa-star-o yellow"></i>
                              <i class="fa fa-star-o yellow"></i>
                              <i class="fa fa-star-o"></i>
                              <i class="fa fa-star-o"></i>
                            </div>
                            <span>3 Reviews</span>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore
                            et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco
                          </p>
                          <div class="pro-details-list">
                            <ul>
                              <li>- 0.5 mm Dail</li>
                              <li>- Inspired vector icons</li>
                              <li>- Very modern style </li>
                            </ul>
                          </div>
                          <div class="pro-details-size-color">
                            <div class="pro-details-color-wrap">
                              <span>Color</span>
                              <div class="pro-details-color-content">
                                <ul>
                                  <li class="blue"></li>
                                  <li class="maroon active"></li>
                                  <li class="gray"></li>
                                  <li class="green"></li>
                                  <li class="yellow"></li>
                                  <li class="white"></li>
                                </ul>
                              </div>
                            </div>
                            <div class="pro-details-size">
                              <span>Size</span>
                              <div class="pro-details-size-content">
                                <ul>
                                  <li><a href="#">s</a></li>
                                  <li><a href="#">m</a></li>
                                  <li><a href="#">l</a></li>
                                  <li><a href="#">xl</a></li>
                                  <li><a href="#">xxl</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="pro-details-quality">
                            <div class="cart-plus-minus">
                              <input class="cart-plus-minus-box" type="text" name="qtybutton" value="2" />
                            </div>
                            <div class="pro-details-cart btn-hover">
                              <a href="#">Add To Cart</a>
                            </div>
                            <div class="pro-details-wishlist">
                              <a href="#"><i class="fa fa-heart-o"></i></a>
                            </div>
                            <div class="pro-details-compare">
                              <a href="#"><i class="pe-7s-shuffle"></i></a>
                            </div>
                          </div>
                          <div class="pro-details-meta">
                            <span>Categories :</span>
                            <ul>
                              <li><a href="#">Minimal,</a></li>
                              <li><a href="#">Furniture,</a></li>
                              <li><a href="#">Fashion</a></li>
                            </ul>
                          </div>
                          <div class="pro-details-meta">
                            <span>Tag :</span>
                            <ul>
                              <li><a href="#">Fashion, </a></li>
                              <li><a href="#">Furniture,</a></li>
                              <li><a href="#">Electronic</a></li>
                            </ul>
                          </div>
                          <div class="pro-details-social">
                            <ul>
                              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                              <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                              <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                              <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CModalBody>
        </CModal>
      </>
    );
  }
}

export default MainApplication;
