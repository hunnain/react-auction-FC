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
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'
import AccountSideBar from '../../Component/AccountSideBar'


class AccountBid extends Component {
    render() {
        return (
            <>
                <Header ChangeView={this.props.ChangeView} toggleLogin={this.props.toggleLogin}/>
                <div class="container-fluid pt-100 bg-all">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 text-center">
                                <div class="account-bid">
                                    <img src={require('../../assets/icons/xd/profile/profile-1.png')} alt="Profile" class="main-profile-img account-bid-img" />
                                    <a href="#" class="account-bid-a"><img src={require('../../assets/icons/xd/icons/pen-01.png')} alt="edit-img" /></a>
                                </div>

                                <h2 class="mt-25 account-bid-h2">@marcussmith</h2>
                                <h6 class="fs-16">Marcus Smith</h6>
                               <AccountSideBar ChangeView={this.props.ChangeView} bids={true}/>
                                {/* <div class="mt-40">
                                    <ul class="side-nav">
                                        <li>
                                            <img src={require('../../assets/icons/xd/icons/profile.png')} alt="" />
                                            <a class="ml-20" href="account-profile.html">Profile</a>
                                        </li>
                                        <li>
                                            <img src={require('../../assets/icons/xd/icons/billing.png')} alt="" />
                                            <a class="ml-20" href="account-billing.html">Billing</a>
                                        </li>
                                        <li class="active">
                                            <img src={require('../../assets/icons/xd/icons/bids.png')} alt="" />
                                            <a class="ml-20" href="account-bids.html">Bids</a>
                                        </li>
                                        <li>
                                            <img src={require('../../assets/icons/xd/icons/listing.png')} alt="" />
                                            <a class="ml-20" href="account-listing.html">Listing</a>
                                        </li>
                                        <li>
                                            <img src={require('../../assets/icons/xd/icons/watchlist.png')} alt="" />
                                            <a class="ml-20" href="account-watchlist.html">Watchlist</a>
                                        </li>
                                    </ul>
                                </div> */}
                                <div class="text-left mb-20">
                                    <button class="logout-btn"><img class="m-right-5" src={require('../../assets/icons/xd/icons/leave.png')} alt="" /> Logout</button>
                                </div>

                            </div>
                            <div class="ml-auto mr-auto col-lg-9">
                                <div class="checkout-wrapper">
                                    <div id="faq" class="panel-group">
                                        <div class="panel panel-default single-my-account">
                                            <div class="panel-heading my-account-title">
                                                <h3 class="panel-title"><a data-toggle="collapse" data-parent="#faq" href="#my-account-1">Live Auctions <div class="numberCircle">30</div></a> </h3>
                                            </div>
                                            <div id="my-account-1" class="panel-collapse collapse show">
                                                <div class="panel-body">
                                                    <div class="myaccount-info-wrapper">
                                                        <div class="row">
                                                            <div class="col-lg-3 col-lg-3">
                                                                <img src={require('../../assets/icons/xd/watches/watch-1.jpg')} alt="" class="wd-100" />
                                                            </div>
                                                            <div class="col-lg-5 col-lg-5">
                                                                <div>
                                                                    <h2 class="acc-bid-h2">Breguet</h2>
                                                                    <img class="flags2" src={require('../../assets/flags/de.png')} alt="Germany Flag" />
                                                                </div>
                                                                <p class="wd-75">Caslito Chronometer Belgium Stone 23SJF65</p>
                                                            </div>
                                                            <div class="col-lg-2 col-lg-2 acc-bid-div">
                                                                <h2 class="fs-22">$45,000</h2>
                                                                <p>7 hours ago</p>
                                                            </div>
                                                            <div class="col-lg-2 col-lg-2 text-center">
                                                                <h2 class="fs-22">24:32:01</h2>
                                                                <p>Time Left</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div class="row">
                                                            <div class="col-lg-3 col-lg-3">
                                                                <img src={require('../../assets/icons/xd/watches/watch-10.jpg')} alt="" class="wd-100" />
                                                            </div>
                                                            <div class="col-lg-5 col-lg-5">
                                                                <div>
                                                                    <h2 class="acc-bid-h2">Panerai</h2>
                                                                    <img class="flags2" src={require('../../assets/flags/cn.png')} alt="China Flag" />
                                                                </div>
                                                                <p class="wd-75">Luminor Marina Automatic -2805JD</p>
                                                            </div>
                                                            <div class="col-lg-2 col-lg-2 acc-bid-div">
                                                                <h2 class="fs-22">$63,000</h2>
                                                                <p>a day ago</p>
                                                            </div>
                                                            <div class="col-lg-2 col-lg-2 text-center">
                                                                <h2 class="fs-22">16:00:01</h2>
                                                                <p>Time Left</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div class="row">
                                                            <div class="col-lg-3 col-lg-3">
                                                                <img src={require('../../assets/icons/xd/watches/watch-15.jpg')} alt="" class="wd-100" />
                                                            </div>
                                                            <div class="col-lg-5 col-lg-5">
                                                                <div>
                                                                    <h2 class="acc-bid-h2">Tudor</h2>
                                                                    <img class="flags2" src={require('../../assets/flags/gb-eng.png')} alt="England Flag" />
                                                                </div>
                                                                <p class="wd-75">Geneve Chronometer - 6575XD</p>
                                                            </div>
                                                            <div class="col-lg-2 col-lg-2 acc-bid-div">
                                                                <h2 class="fs-22">$74,000</h2>
                                                                <p>2 days ago</p>
                                                            </div>
                                                            <div class="col-lg-2 col-lg-2 text-center">
                                                                <h2 class="fs-22">12:18:01</h2>
                                                                <p>Time Left</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default single-my-account">
                                            <div class="panel-heading my-account-title">
                                                <h3 class="panel-title"><a data-toggle="collapse" data-parent="#faq" href="#my-account-2">Won Auctions <div class="numberCircle">0</div></a></h3>
                                            </div>
                                            <div id="my-account-2" class="panel-collapse collapse show">
                                                <div class="panel-body">
                                                    <div class="myaccount-info-wrapper">
                                                        <div class="row">
                                                            <div class="col-lg-3 col-lg-3">
                                                                <img src={require('../../assets/icons/xd/watches/watch-3.jpg')} alt="" class="wd-100" />
                                                            </div>
                                                            <div class="col-lg-7 col-lg-7">
                                                                <div>
                                                                    <h2 class="acc-bid-h2">Hublot</h2>
                                                                    <img class="flags2" src={require('../../assets/flags/pk.png')} alt="Pakistan Flag" />
                                                                </div>
                                                                <p class="wd-75">Sphere Bassilica - White 2A5986</p>
                                                            </div>
                                                            <div class="col-lg-2 col-lg-2 text-right">
                                                                <h2 class="fs-22">$50,000</h2>
                                                                <a href="#" class="blue">Verify Payment</a>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-10">
                                                            <div class="col-lg-6 col-lg-6 pr-0">
                                                                <button class="continue-pay">Continue Payment</button>
                                                            </div>
                                                            <div class="col-lg-6 col-lg-6 pr-0 pl-0">
                                                                <button class="contact-supp">Contact Support</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default single-my-account">
                                            <div class="panel-heading my-account-title">
                                                <h3 class="panel-title"><a data-toggle="collapse" data-parent="#faq" href="#my-account-3">Lost Auctions <div class="numberCircle">2</div></a></h3>
                                            </div>
                                            <div id="my-account-3" class="panel-collapse collapse show">
                                                <div class="panel-body">
                                                    <div class="myaccount-info-wrapper">
                                                        <div class="row">
                                                            <div class="col-lg-3 col-lg-3">
                                                                <img src={require('../../assets/icons/xd/watches/watch-4.jpg')} alt="" class="wd-100" />
                                                            </div>
                                                            <div class="col-lg-7 col-lg-7">
                                                                <div>
                                                                    <h2 class="acc-bid-h2">Bremont</h2>
                                                                    <img class="flags2" src={require('../../assets/flags/us.png')} alt="USA Flag" />
                                                                </div>
                                                                <p class="wd-75">Sunlight Travel Halking</p>
                                                            </div>
                                                            <div class="col-lg-2 col-lg-2 text-right">
                                                                <h2 class="fs-22">$55,000</h2>
                                                                <p>7 hours ago</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div class="row">
                                                            <div class="col-lg-3 col-lg-3">
                                                                <img src={require('../../assets/icons/xd/watches/watch-5.jpg')} alt="" class="wd-100" />
                                                            </div>
                                                            <div class="col-lg-7 col-lg-7">
                                                                <div>
                                                                    <h2 class="acc-bid-h2">Panerai</h2>
                                                                    <img class="flags2" src={require('../../assets/flags/vc.png')} alt="USA Flag" />
                                                                </div>
                                                                <p class="wd-75">Radiomir GMT Power Reserve - 94JF03</p>
                                                            </div>
                                                            <div class="col-lg-2 col-lg-2 text-right">
                                                                <h2 class="fs-22">$15,000</h2>
                                                                <p>a day ago</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer ChangeView={this.props.ChangeView}/>
            </>
        );
    }
}

export default AccountBid;
