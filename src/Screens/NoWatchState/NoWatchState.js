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

class NoWatchState extends Component {
    render() {
        return (
            <>
                <Header />
                <div class="container-fluid pt-50 pb-50 bg-all">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group has-search p-20 bg-white m-auto wd-80">
                                    <span class="fa fa-search form-control-feedback"></span>
                                    <input type="text" class="form-control" placeholder="Search" />
                                    <button class="srch-btn">Search</button>
                                    <a class="filter" href="#">Filter</a>
                                    <i class="fa fa-filter" aria-hidden="true"></i>
                                    <select name="no-watch" id="no-watch" class="watchaction ml-10">
                                        <option value="#">Live</option>
                                        <option value="#">Live</option>
                                        <option value="#">Live</option>
                                    </select>
                                </div>
                                <p class="mt-20 wd-80 m-auto no-watch-p">You searched for "keyword" with 0 Results</p>
                            </div>
                            <div class="col-md-12 text-center">
                                <div class="text-center pt-20 pb-20 pl-0 pr-0 wd-80 m-auto">
                                    <img src={require('../../assets/icons/xd/watch.png')} alt="watch" />
                                </div>
                                <h4 class="mt-40 text-center">No watch on the list of auctions</h4>
                                <input class="acc-profile-btn-one mt-20 no-watch-btn" type="button" value="Sell a Watch" />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default NoWatchState;
