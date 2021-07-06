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

class Dashboard extends Component {
    render() {
        return (
            <>
                <Header ChangeView={this.props.ChangeView} toggleLogin={this.props.toggleLogin}/>

                <div class="container-fluid pt-50 pb-50 bg-all dark-color">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 mb-30">
                                <p>
                                    <a href="#">Bids</a> <span class="slash">/</span> <a class="blue" href="#">Bremont - Sunlight Travel Halking</a>
                                </p>
                            </div>
                            <div class="col-md-8 mb-50">
                                <div id="demo" class="carousel slide" data-ride="carousel">
                                    <ul class="carousel-indicators">
                                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                                        <li data-target="#demo" data-slide-to="1"></li>
                                        <li data-target="#demo" data-slide-to="2"></li>
                                    </ul>

                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={require('../../assets/icons/xd/watch-detail/watch-2/slider-image-1.png')} alt="Slider1" class="wd-100" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={require('../../assets/icons/xd/watch-detail/watch-2/slider-image-2.png')} alt="Slider2" class="wd-100" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={require('../../assets/icons/xd/watch-detail/watch-2/slider-image-3.png')} alt="Slider3" class="wd-100" />
                                        </div>
                                    </div>

                                    <a class="carousel-control-prev" href="#demo" data-slide="prev">
                                        <span class="carousel-control-prev-icon"></span>
                                    </a>
                                    <a class="carousel-control-next" href="#demo" data-slide="next">
                                        <span class="carousel-control-next-icon"></span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-4 pl-30 pt-10 mb-0">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <p class="won-auction">Won Auction</p>
                                            <h3 class="watch-detail-h2">Bremont</h3>
                                            <img class="watch-detail-flag" src={require('../../assets/flags/us.png')} alt="Germany Flag" />
                                            <p class="mb-10 dark-color">Sunlight Travel Halking</p>
                                        </div>
                                        <div class="col-md-12 congrats-box">
                                            <h4>Congratulations!</h4>
                                            <img src={require('../../assets/icons/xd/people/human-1.png')} alt="" />
                                            <a class="blue" href="#">@janinemallari</a>
                                            <p>placed a bid of <span>$55,000</span></p>
                                        </div>
                                        <div class="col-md-12 ml-15 p-0">
                                            <button class="continue-payment" data-toggle="modal" data-target="#paymentModal">Continue Payment</button>
                                            <button class="contact-support">Contact Support</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="container pl-0 pr-0">
                                    <div class="row">
                                        <div class="col-md-5 watch-detail-border">
                                            <h3 class="mb-20 m-auto fw-300">Product Overview</h3>
                                            <ul class="watch-detail-main-ul">
                                                <li>
                                                    <ul class="ds-flex">
                                                        <li>Box:</li>
                                                        <li>Yes</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul class="ds-flex">
                                                        <li>Papers:</li>
                                                        <li>Yes</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul class="ds-flex">
                                                        <li>Age:</li>
                                                        <li>since 2014 (7 years)</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul class="ds-flex">
                                                        <li>Movement:</li>
                                                        <li>Automatic</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul class="ds-flex">
                                                        <li>Case:</li>
                                                        <li>Carbon</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul class="ds-flex">
                                                        <li>Bracelet:</li>
                                                        <li>Leather</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul class="ds-flex">
                                                        <li>Dial:</li>
                                                        <li>Skeleton</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-7 pl-40">
                                            <h3 class="mb-20 m-auto fw-300">Lot Overview</h3>
                                            <ul class="watch-detail-main-ul">
                                                <li>
                                                    <ul class="ds-flex">
                                                        <li>Lot:</li>
                                                        <li>#000100</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul class="ds-flex">
                                                        <li>Location:</li>
                                                        <li>Canterbury, Kent, United Kingdom</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul class="ds-flex">
                                                        <li>Seller:</li>
                                                        <li>@jhasmine27 (Private)</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul class="ds-flex">
                                                        <li>Currency:</li>
                                                        <li>USD</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="row mt-40 mb-20">
                                        <div class="col-md-12 mb-50">
                                            <p class="fs-12 text-left wd-70">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally.</p>
                                        </div>
                                        <div class="col-md-12">
                                            <img src={require('../../assets/icons/xd/watch-detail/watch-2/detail-1.png')} alt="" class="wd-100" />
                                        </div>
                                    </div>
                                    <div class="row mt-60 mb-60">
                                        <div class="col-md-6">
                                            <p class="fs-12 text-left wd-95">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain.</p>
                                            <p class="fs-12 text-left wd-95">but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain.</p>
                                        </div>
                                        <div class="col-md-6">
                                            <img src={require('../../assets/icons/xd/watch-detail/watch-2/detail-2.png')} alt="" class="wd-100" />
                                        </div>
                                    </div>
                                    <div class="row mt-60 mb-60">
                                        <div class="col-md-6">
                                            <img src={require('../../assets/icons/xd/watch-detail/watch-2/detail-3.png')} alt="" class="wd-100" />
                                        </div>
                                        <div class="col-md-6 pl-40">
                                            <p class="fs-12 text-left">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain.</p>
                                            <p class="fs-12 text-left">but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain.</p>
                                        </div>

                                    </div>
                                    <div class="row mt-60 mb-60">
                                        <div class="col-md-12">
                                            <img src={require('../../assets/icons/xd/watch-detail/watch-2/detail-4.png')} alt="" class="wd-100" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <p class="fs-12 text-left wd-70">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">

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
