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


class Dashboard extends Component {
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
                                {/* <div class="mt-40">
                                    <ul class="side-nav">
                                        <li class="active">
                                            <img src={require('../../assets/icons/xd/icons/profile.png')} alt="" />
                                            <a class="ml-20" href="account-profile.html">Profile</a>
                                        </li>
                                        <li>
                                            <img src={require('../../assets/icons/xd/icons/billing.png')} alt="" />
                                            <a class="ml-20" href="account-billing.html">Billing</a>
                                        </li>
                                        <li>
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
                                 <AccountSideBar ChangeView={this.props.ChangeView} profile={true}/>
                                <div class="text-left mb-20">
                                    <button class="logout-btn"><img class="m-right-5" src={require('../../assets/icons/xd/icons/leave.png')} alt="" /> Logout</button>
                                </div>

                            </div>
                            <div class="ml-auto mr-auto col-lg-9">
                                <div class="checkout-wrapper">
                                    <div id="faq" class="panel-group">
                                        <div class="panel panel-default single-my-account">
                                            <div class="panel-heading my-account-title">
                                                <h3 class="panel-title"><a data-toggle="collapse" data-parent="#faq" href="#my-account-1">Profile Details </a></h3>
                                            </div>
                                            <div id="my-account-1" class="panel-collapse collapse show">
                                                <div class="panel-body">
                                                    <div class="myaccount-info-wrapper">
                                                        <form action="">
                                                            <div class="row">
                                                                <div class="col-lg-6 col-md-6">
                                                                    <div class="billing-info">
                                                                        <input type="text" class="acc-input" placeholder="First Name" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6">
                                                                    <div class="billing-info">
                                                                        <input type="text" class="acc-input" placeholder="Last Name" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6">
                                                                    <div class="billing-info">
                                                                        <input type="text" class="acc-input" placeholder="Mobile #" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6">
                                                                    <div class="billing-info">
                                                                        <input type="email" class="acc-input" placeholder="Email address" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3 col-md-3">
                                                                    <div class="billing-info">
                                                                        <input class="acc-profile-btn-one" type="button" value="Update" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default single-my-account">
                                            <div class="panel-heading my-account-title">
                                                <h3 class="panel-title"><a data-toggle="collapse" data-parent="#faq" href="#my-account-2">Notifications </a></h3>
                                            </div>
                                            <div id="my-account-2" class="panel-collapse collapse show">
                                                <div class="panel-body">
                                                    <div class="myaccount-info-wrapper">
                                                        <div class="row">
                                                            <div class="col-lg-12 col-md-12">
                                                                <div class="billing-info">
                                                                    <div class="switchToggle">
                                                                        <input type="checkbox" id="switch" />
                                                                        <label for="switch">Toggle</label>
                                                                        <p class="noti-p">Would you like o receive daily briefing?</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-12 col-md-12">
                                                                <div class="billing-info">
                                                                    <div class="switchToggle">
                                                                        <input type="checkbox" id="switch1" />
                                                                        <label for="switch1">Toggle</label>
                                                                        <p class="noti-p">Would you like o receive news & promotions from watchtrade.com?</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default single-my-account">
                                            <div class="panel-heading my-account-title">
                                                <h3 class="panel-title"><a data-toggle="collapse" data-parent="#faq" href="#my-account-3">My Password</a></h3>
                                            </div>
                                            <div id="my-account-3" class="panel-collapse collapse show">
                                                <div class="panel-body">
                                                    <div class="myaccount-info-wrapper">
                                                        <form action="">
                                                            <div class="row">
                                                                <div class="col-lg-12 col-md-12">
                                                                    <div class="billing-info">
                                                                        <div class="form-group">
                                                                            <div class="input-group" id="show_hide_password">
                                                                                <input class=" login-password" placeholder="Old Password" type="password" />
                                                                                <div class="input-group-addon">
                                                                                    <a href=""><i class="fa fa-eye-slash" aria-hidden="true"></i></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-12 col-md-12">
                                                                    <div class="billing-info">
                                                                        <div class="form-group">
                                                                            <div class="input-group" id="show_hide_password">
                                                                                <input class=" login-password" placeholder="New Password" type="password" />
                                                                                <div class="input-group-addon">
                                                                                    <a href=""><i class="fa fa-eye-slash" aria-hidden="true"></i></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-12 col-md-12">
                                                                    <div class="billing-info">
                                                                        <div class="form-group">
                                                                            <div class="input-group" id="show_hide_password">
                                                                                <input class=" login-password" placeholder="Retype New Password" type="password" />
                                                                                <div class="input-group-addon">
                                                                                    <a href=""><i class="fa fa-eye-slash" aria-hidden="true"></i></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3 col-md-3">
                                                                    <div class="billing-info">
                                                                        <input class="acc-profile-btn-one" type="button" value="Update" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>

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

export default Dashboard;
