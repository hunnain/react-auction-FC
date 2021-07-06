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
import { getDashboardDetailAll } from '../../Controllers/DashboardController'
import Footer from '../../Component/Footer'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.getWatchList()
  }
  getWatchList = async () => {
    let res = await getDashboardDetailAll()
    if (res) {
      this.setState({ data: res })
    }
    console.log('res', res);

  }
  render() {
    return (
      <>
        <Header ChangeView={this.props.ChangeView} toggleLogin={this.props.toggleLogin}/>
        <div class="slider-area">
          <div class="slider-active owl-carousel nav-style-1">
            <div class="single-slider slider-height-1 bg-purple">
              <div class="container">
                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-12 col-sm-12">
                    <h1 class="title-heading">But I must explain to you how all this mistaken idea.</h1>
                    <div class="form-group has-search index-form-group">
                      <span class="fa fa-search form-control-feedback"></span>
                      <input type="text" class="form-control" placeholder="Search" />
                      <button class="srch-btn">Search</button>
                      <a class="filter" href="#">Filter</a>
                      <i class="fa fa-filter" aria-hidden="true"></i>
                    </div>
                  </div>
                  {/* <div class="col-xl-12 col-lg-12 col-md-12 col-12 col-sm-12 filter-box" id="filter-box">
                    <form action="#">
                        <div class="container">
                          <div class="row">
                            <div class="col-md-3 text-left">
                              <h3 class="mt-20 mb-50">Manufacturers</h3>
                            </div>
                            <div class="col-md-3 text-left">
                              
                            </div>
                            <div class="col-md-3 text-left">
                              <h3 class="mt-20 mb-50">Location</h3>
                            </div>
                            <div class="col-md-3 text-left">
                              <h3 class="mt-20 mb-50">Seller Type</h3>
                            </div>
                              <div class="col-md-3 text-left">
                                <div class="form-check">
                                  <input class="check-styled" type="checkbox" id="Jaeger-LeCoultre" />
                                  <label class="check-label" for="html">Jaeger-LeCoultre <span class="circle-filter">6</span></label>
                                </div>
                                <div class="form-check">
                                  <input class="check-styled" type="checkbox" id="Jaeger-LeCoultre1" />
                                  <label class="check-label" for="html">Jaeger-LeCoultre <span class="circle-filter">6</span></label>
                                </div>
                                <div class="form-check">
                                  <input class="check-styled" type="checkbox" id="Jaeger-LeCoultre2" />
                                  <label class="check-label" for="html">Jaeger-LeCoultre <span class="circle-filter">6</span></label>
                                </div>
                                <div class="form-check">
                                  <input class="check-styled" type="checkbox" id="Jaeger-LeCoultre3" />
                                  <label class="check-label" for="html">Jaeger-LeCoultre <span class="circle-filter">6</span></label>
                                </div>
                                <div class="form-check">
                                  <input class="check-styled" type="checkbox" id="Jaeger-LeCoultre4" />
                                  <label class="check-label" for="html">Jaeger-LeCoultre <span class="circle-filter">6</span></label>
                                </div>
                                <button class="apply-filter-btn">Apply Filters</button>
                                <button class="clear-filter-btn">Clear</button>
                              </div>

                              <div class="col-md-3 text-left">
                                <div class="form-check">
                                  <input class="check-styled" type="checkbox" id="Jaeger-LeCoultre" />
                                  <label class="check-label" for="html">Jaeger-LeCoultre <span class="circle-filter">6</span></label>
                                </div>
                                <div class="form-check">
                                  <input class="check-styled" type="checkbox" id="Jaeger-LeCoultre1" />
                                  <label class="check-label" for="html">Jaeger-LeCoultre <span class="circle-filter">6</span></label>
                                </div>
                                <div class="form-check">
                                  <input class="check-styled" type="checkbox" id="Jaeger-LeCoultre2" />
                                  <label class="check-label" for="html">Jaeger-LeCoultre <span class="circle-filter">6</span></label>
                                </div>
                                <div class="form-check">
                                  <input class="check-styled" type="checkbox" id="Jaeger-LeCoultre3" />
                                  <label class="check-label" for="html">Jaeger-LeCoultre <span class="circle-filter">6</span></label>
                                </div>
                                <div class="form-check">
                                  <input class="check-styled" type="checkbox" id="Jaeger-LeCoultre4" />
                                  <label class="check-label" for="html">Jaeger-LeCoultre <span class="circle-filter">6</span></label>
                                </div>
                              </div>

                              <div class="col-md-3 text-left">
                                <div class="form-check">
                                  <input class="check-styled" type="checkbox" id="Jaeger-LeCoultre" />
                                  <label class="check-label" for="html">Jaeger-LeCoultre <span class="circle-filter">6</span></label>
                                </div>
                                <div class="form-check">
                                  <input class="check-styled" type="checkbox" id="Jaeger-LeCoultre1" />
                                  <label class="check-label" for="html">Jaeger-LeCoultre <span class="circle-filter">6</span></label>
                                </div>
                                <div class="form-check">
                                  <input class="check-styled" type="checkbox" id="Jaeger-LeCoultre2" />
                                  <label class="check-label" for="html">Jaeger-LeCoultre <span class="circle-filter">6</span></label>
                                </div>
                                <div class="form-check">
                                  <input class="check-styled" type="checkbox" id="Jaeger-LeCoultre3" />
                                  <label class="check-label" for="html">Jaeger-LeCoultre <span class="circle-filter">6</span></label>
                                </div>
                                <div class="form-check">
                                  <input class="check-styled" type="checkbox" id="Jaeger-LeCoultre4" />
                                  <label class="check-label" for="html">Jaeger-LeCoultre <span class="circle-filter">6</span></label>
                                </div>
                              </div>

                              <div class="col-md-3 text-left">
                                <div class="form-check">
                                  <input class="check-styled" type="checkbox" id="Jaeger-LeCoultre" />
                                  <label class="check-label" for="html">Jaeger-LeCoultre <span class="circle-filter">6</span></label>
                                </div>
                                <div class="form-check">
                                  <input class="check-styled" type="checkbox" id="Jaeger-LeCoultre1" />
                                  <label class="check-label" for="html">Jaeger-LeCoultre <span class="circle-filter">6</span></label>
                                </div>
                                <div class="form-check">
                                  <input class="check-styled" type="checkbox" id="Jaeger-LeCoultre2" />
                                  <label class="check-label" for="html">Jaeger-LeCoultre <span class="circle-filter">6</span></label>
                                </div>
                                <div class="form-check">
                                  <input class="check-styled" type="checkbox" id="Jaeger-LeCoultre3" />
                                  <label class="check-label" for="html">Jaeger-LeCoultre <span class="circle-filter">6</span></label>
                                </div>
                                <div class="form-check">
                                  <input class="check-styled" type="checkbox" id="Jaeger-LeCoultre4" />
                                  <label class="check-label" for="html">Jaeger-LeCoultre <span class="circle-filter">6</span></label>
                                </div>
                              </div>
                            
                          </div>
                        </div>
                      </form>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container index-pro-con">
          <div class="product-tab-list nav pt-30 pb-55 text-center">
            <a class="active" href="#product-1" data-toggle="tab">
              <h4 class="index-new-arrivals">New Arrivals </h4>
            </a>
          </div>
          <div class="tab-content jump">
            <div class="tab-pane active" id="product-1">
              <div class="row">
                <div class="col-md-6 mb-20">
                  <i class="fab fa-hotjar"></i>
                  <h3 class="index-hot-auction">Hot Auctions</h3>
                </div>
                <div class="col-md-6 top-nav mb-20 text-right">
                  <h6 class="watch-auction-h6">84 Watch Auctions</h6>
                  <select name="WatchAction" id="WatchAction" class="watchaction">
                    <option value="#">Live</option>
                    <option value="#">Live</option>
                    <option value="#">Live</option>
                  </select>
                </div>
                {this.state.data.map((value) => {
                  return (

                    <div class="col-xl-3 col-md-3 col-lg-3 col-sm-6">
                      <div>
                        <h3 class="index-title"><a href="#">{value.name}</a></h3>
                        <img class="flags" src={require('../../assets/flags/de.png')} alt="Germany Flag" />
                        <p class="mb-10 index-title-p">{value.name} {value.brand} - Gray {value.modelNo}</p>
                      </div>
                      <div class="product-wrap mb-25 scroll-zoom">
                        <div class="product-img">
                          <a href="#">
                            <img class="default-img" src={require('../../assets/icons/xd/watches/watch-1.jpg')} alt="" />
                            <img class="hover-img" src={require('../../assets/icons/xd/watches/watch-1a.jpg')} alt="" />
                          </a>
                          <span class="pink">{new Date(value.auctionExpireAt).getHours()+':'+new Date(value.auctionExpireAt).getMinutes()+'+'+new Date(value.auctionExpireAt).getMilliseconds()}</span>
                          <div class="product-action">
                            <div class="pro-same-action pro-wishlist">
                              <a title="Wishlist" href="wishlist.html"><i class="pe-7s-like"></i></a>
                            </div>
                            <div class="pro-same-action pro-cart">
                              <a title="Add To Cart" href="#"><i class="pe-7s-cart"></i> Add to cart</a>
                            </div>
                            <div class="pro-same-action pro-quickview">
                              <a title="Quick View" href="#" data-toggle="modal"
                                data-target="#exampleModal"><i class="pe-7s-look"></i></a>
                            </div>
                          </div>
                        </div>
                        <div class="product-content">
                          <div class="product-price">
                            <span>$ {value.startingPrice}.00</span> <span class="price-circle">45</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}

              </div>
            </div>
          </div>
        </div>
        <div class="blog-area ">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12 foot-img text-center">
                <div class="text-center m-auto index-blog">
                  <h2 class="white">Subscribe to our Newsletter</h2>
                  <p class="white">But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born.</p>
                  <form action="#" class="form-control index-blog-form">
                    <input type="text" name="foot" id="foot" placeholder="Email Address" />
                    <input type="submit" value="Subscribe Now" class="btn btn-primary index-blog-input" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer ChangeView={this.props.ChangeView} />
      </>
    );
  }
}

export default Dashboard;
