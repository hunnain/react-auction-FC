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

class Faqs extends Component {
    render() {
        return (
            <>
                <Header ChangeView={this.props.ChangeView} toggleLogin={this.props.toggleLogin}/>

                <div class="container-fluid faq-main-cont">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h1 class="white pt-400">Frequently Asked Questions</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid pt-50 pb-50 bg-all">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <div class="form-group has-search faq-center-div">
                                    <span class="fa fa-search form-control-feedback"></span>
                                    <input type="text" class="form-control bg-white wd-100" placeholder="Search" />
                                    <button class="srch-btn">Search</button>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="faq-center-div">
                                    <ul class="nav nav-tabs" role="tablist">
                                        <li class="nav-item wd-50">
                                            <a class="nav-link active" data-toggle="tab" href="#seller" role="tab">Seller</a>
                                        </li>
                                        <li class="nav-item wd-50">
                                            <a class="nav-link" data-toggle="tab" href="#buyer" role="tab">Buyer</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane mt-20 active" id="seller" role="tabpanel">
                                            <div class="accordion" id="seller">
                                                <div class="card">
                                                    <div class="card-header" id="headingOne">
                                                        <h2 class="mb-0">
                                                            <button type="button" class="btn btn-link" data-toggle="collapse" data-target="#collapseFirst"><i class="fa fa-plus"></i> What information do I need to provide to Watch Collecting?</button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseFirst" class="collapse show" aria-labelledby="headingOne" data-parent="#seller">
                                                        <div class="card-body">
                                                            <p>When you submit a watch for consideration, we will ask for key details of it. When we decide to consign a watch, our copywriters will contact you to gather further information.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-header" id="headingTwo">
                                                        <h2 class="mb-0">
                                                            <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSecond"><i class="fa fa-plus"></i> Can you remove the auction listing after it’s been listed on Watch Collecting?</button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseSecond" class="collapse" aria-labelledby="headingTwo" data-parent="#seller">
                                                        <div class="card-body">
                                                            <p>When you submit a watch for consideration, we will ask for key details of it. When we decide to consign a watch, our copywriters will contact you to gather further information.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-header" id="headingThree">
                                                        <h2 class="mb-0">
                                                            <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThird"><i class="fa fa-plus"></i> What happens if there are no bids above my reserve price?</button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseThird" class="collapse" aria-labelledby="headingThree" data-parent="#seller">
                                                        <div class="card-body">
                                                            <p>When you submit a watch for consideration, we will ask for key details of it. When we decide to consign a watch, our copywriters will contact you to gather further information.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-header" id="headingFour">
                                                        <h2 class="mb-0">
                                                            <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour"><i class="fa fa-plus"></i> What is the ‘Buy Now’ option?</button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#seller">
                                                        <div class="card-body">
                                                            <p>When you submit a watch for consideration, we will ask for key details of it. When we decide to consign a watch, our copywriters will contact you to gather further information.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-header" id="headingFive">
                                                        <h2 class="mb-0">
                                                            <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive"><i class="fa fa-plus"></i> Can I discuss a consignment with you without signing up?</button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#seller">
                                                        <div class="card-body">
                                                            <p>When you submit a watch for consideration, we will ask for key details of it. When we decide to consign a watch, our copywriters will contact you to gather further information.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-header" id="headingSix">
                                                        <h2 class="mb-0">
                                                            <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix"><i class="fa fa-plus"></i> Can I set a minimum selling price for my watch?</button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#seller">
                                                        <div class="card-body">
                                                            <p>When you submit a watch for consideration, we will ask for key details of it. When we decide to consign a watch, our copywriters will contact you to gather further information.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-header" id="headingSeven">
                                                        <h2 class="mb-0">
                                                            <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven"><i class="fa fa-plus"></i> What happens if my watch is flagged by the Art Loss Register?</button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#seller">
                                                        <div class="card-body">
                                                            <p>When you submit a watch for consideration, we will ask for key details of it. When we decide to consign a watch, our copywriters will contact you to gather further information.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane mt-20" id="buyer" role="tabpanel">
                                            <div class="accordion" id="buyer">
                                                <div class="card">
                                                    <div class="card-header" id="headingOne">
                                                        <h2 class="mb-0">
                                                            <button type="button" class="btn btn-link" data-toggle="collapse" data-target="#collapseOne"><i class="fa fa-plus"></i> Can I follow up with the seller after the auction ends if it failed to meet reserve and I am still interested?</button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#buyer">
                                                        <div class="card-body">
                                                            <p>If the auction lot fails to meet its reserve price, we offer sellers the option of listing the watch in our ‘Buy Now’ section. This allows the possibility of a post-auction deal.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-header" id="headingTwo">
                                                        <h2 class="mb-0">
                                                            <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo"><i class="fa fa-plus"></i> What information do I need to provide to Watch Collecting?</button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#buyer">
                                                        <div class="card-body">
                                                            <p>When you submit a watch for consideration, we will ask for key details of it. When we decide to consign a watch, our copywriters will contact you to gather further information.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-header" id="headingThree">
                                                        <h2 class="mb-0">
                                                            <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree"><i class="fa fa-plus"></i> What information do I need to provide to Watch Collecting?</button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#buyer">
                                                        <div class="card-body">
                                                            <p>When you submit a watch for consideration, we will ask for key details of it. When we decide to consign a watch, our copywriters will contact you to gather further information.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-header" id="headingFourth">
                                                        <h2 class="mb-0">
                                                            <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFourth"><i class="fa fa-plus"></i> What happens at the end of the auction if I have won the bidding?</button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseFourth" class="collapse" aria-labelledby="headingFourth" data-parent="#buyer">
                                                        <div class="card-body">
                                                            <p>When you submit a watch for consideration, we will ask for key details of it. When we decide to consign a watch, our copywriters will contact you to gather further information.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-header" id="headingFifth">
                                                        <h2 class="mb-0">
                                                            <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFifth"><i class="fa fa-plus"></i> Does the buyer's premium include postage?</button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseFifth" class="collapse" aria-labelledby="headingFifth" data-parent="#buyer">
                                                        <div class="card-body">
                                                            <p>When you submit a watch for consideration, we will ask for key details of it. When we decide to consign a watch, our copywriters will contact you to gather further information.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-header" id="headingSixth">
                                                        <h2 class="mb-0">
                                                            <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSixth"><i class="fa fa-plus"></i> Bid increments</button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseSixth" class="collapse" aria-labelledby="headingSixth" data-parent="#buyer">
                                                        <div class="card-body">
                                                            <p>When you submit a watch for consideration, we will ask for key details of it. When we decide to consign a watch, our copywriters will contact you to gather further information.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-header" id="headingSeventh">
                                                        <h2 class="mb-0">
                                                            <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeventh"><i class="fa fa-plus"></i> What information do I need to provide to Watch Collecting?</button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseSeventh" class="collapse" aria-labelledby="headingSeventh" data-parent="#buyer">
                                                        <div class="card-body">
                                                            <p>When you submit a watch for consideration, we will ask for key details of it. When we decide to consign a watch, our copywriters will contact you to gather further information.</p>
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

export default Faqs;
