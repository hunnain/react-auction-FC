import React from 'react';  
import { Link } from 'react-router-dom';
  class IndexPage extends React.Component {
      constructor(props)
      {
          super(props);
          this.state = 
          {
              products : []
          }
      }
    componentDidMount() {
        // Simple GET request using fetch
        fetch(window.$base_api+'/web/products')
        .then(async response => {
            const data = await response.json();
            console.log("Data======>", data);
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            this.setState({ products: data })
            // console.log(data);
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
    }
    render() {
        var {products} = this.state;
        
      return ( 
        <div> 
          <div className="slider-area">
              <div className="slider-active owl-carousel nav-style-1">
                  <div className="single-slider slider-height-1 bg-purple">
                      <div className="container">
                          <div className="row">
                              <div className="col-xl-12 col-lg-12 col-md-12 col-12 col-sm-12">
                                  <h1 className="title-heading">But I must explain to you how all this mistaken idea.</h1>
                                  <div className="form-group has-search index-form-group">
                                      <span className="fa fa-search form-control-feedback"></span>
                                      <input type="text" className="form-control" placeholder="Search" />
                                      <button className="srch-btn">Search</button>
                                      <a className="filter" href="#">Filter</a>
                                      <i className="fa fa-filter" aria-hidden="true"></i>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  
          <div className="product-area pb-60">
              <div className="container index-pro-con">
                  <div className="product-tab-list nav pt-30 pb-55 text-center">
                      <a className="active" href="#product-1" data-toggle="tab">
                          <h4 className="index-new-arrivals">New Arrivals </h4>
                      </a>
                  </div>
                  <div className="tab-content jump">
                      <div className="tab-pane active" id="product-1">
                          <div className="row">
                              <div className="col-md-6 mb-20">
                                  <i className="fab fa-hotjar"></i>
                                  <h3 className="index-hot-auction">Hot Auctions</h3>
                              </div>
                              <div className="col-md-6 top-nav mb-20 text-right">
                                  <h6 className="watch-auction-h6">84 Watch Auctions</h6>
                                  <select name="WatchAction" id="WatchAction" className="watchaction">
                                      <option value="#">Live</option>
                                      <option value="#">Live</option>
                                      <option value="#">Live</option>
                                  </select>
                              </div>
                                {products.map((product, index) => (  
                                    <div  key={"product"+index} className="col-xl-3 col-md-3 col-lg-3 col-sm-6">
                                        <div>
                                            <h3 className="index-title"><a href="#">{product.brand}</a></h3>
                                            <img className="flags" src="/assets/images/flags/de.png" alt="Germany Flag" />
                                            <p className="mb-10 index-title-p">{product.name} - {product.modelNo}</p>
                                        </div>
                                    
                                        <div className="product-wrap mb-25 scroll-zoom">
                                            <div className="product-img">
                                            <Link to={{
                                                pathname: `/product/${product._id}`,                                                 
                                                }}>
                                                
                                                    <img className="default-img" src={window.$base_api+product.images[0]} alt=""/>
                                                    <img className="hover-img" src={window.$base_api+product.images[1]} alt=""/>
                                                
                                                </Link>
                                                <span className="pink">{product.auctionExpireAt}</span>
                                                <div className="product-action">
                                                    <div className="pro-same-action pro-wishlist">
                                                        <a title="Wishlist" href="wishlist.html"><i className="pe-7s-like"></i></a>
                                                    </div>
                                                    <div className="pro-same-action pro-cart">
                                                        <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                    </div>
                                                    <div className="pro-same-action pro-quickview">
                                                        <a title="Quick View" href="#" data-toggle="modal"
                                                            data-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-price">
                                                    <span>$ {product.startingPrice}</span> <span className="price-circle">45</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}  
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        
          <div className="blog-area ">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-12 foot-img text-center">
                          <div className="text-center m-auto index-blog">
                              <h2 className="white">Subscribe to our Newsletter</h2>
                              <p className="white">But I must explain to you how all this mistaken idea of
                                  denouncing pleasure and praising pain was born.</p>
                              <form action="#" className="form-control index-blog-form">
                                  <input type="text" name="foot" id="foot" placeholder="Email Address" />
                                  <input type="submit" value="Subscribe Now" className="btn btn-primary index-blog-input" />
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      );
    }
  }
export default IndexPage  