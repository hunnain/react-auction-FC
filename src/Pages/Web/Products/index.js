import React from 'react';
class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state =
    {
      product: [
        {
          "auctionExpireAt":"",
          "startingPrice":"",
          "images":[
          ],
          "confirmationCode":"",
          "status":"",
          "_id":"",
          "bidHistory":[
          ],
          "created_at":"",
          "updated_at":"",
          "updated":"",
          "userId":"",
          "name":"",
          "brand":"",
          "modelNo":"",
          "description":""
        }
      ]
    }
  }
  componentDidMount() {
    // Simple GET request using fetch
    fetch(window.$base_api + '/web/products/?_id='+this.props.match.params._id)
      .then(async response => {
        const data = await response.json();
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        this.setState({ product: data })
        // console.log(data);
      })
      .catch(error => {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
      });
  }
  render() {
    var { product } = this.state;
    return (
      
      <React.Fragment>
        <div class="container-fluid pt-50 pb-50 bg-all dark-color">
          <div class="container">
            <div class="row">
              <div class="col-md-12 mb-30">
                <p>
                  <a href="#">Auctions</a> <span class="slash">/</span> <a class="blue" href="#">Hublot - Sphere Bassilica - Blue 2A5986</a>
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
                      <img src="assets/images/xd/watch-detail/watch-1/slider-image-1.png" alt="Slider1" class="wd-100" />
                    </div>
                    <div class="carousel-item">
                      <img src="assets/images/xd/watch-detail/watch-1/slider-image-2.png" alt="Slider2" class="wd-100" />
                    </div>
                    <div class="carousel-item">
                      <img src="assets/images/xd/watch-detail/watch-1/slider-image-3.png" alt="Slider3" class="wd-100" />
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
              <div class="col-md-4 pl-30 pt-50 mb-50">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <h3 class="watch-detail-h2">{product[0].brand}</h3>
                      <img class="watch-detail-flag" src="assets/images/flags/de.png" alt="Germany Flag" />
                      <p class="mb-10 dark-color">{product[0].name} - {product[0].modelNo}</p>
                    </div>
                    <div class="col-md-6 watch-detail-border">
                      <h3 class="fw-400 m-auto">$43,000</h3>
                      <p class="fs-12">bid placed by <a class="blue" href="#">@jackson5</a></p>
                    </div>
                    <div class="col-md-6 pl-40">
                      <h3 class="fw-400 m-auto">24:32:01</h3>
                      <p class="fs-12">Time Left</p>
                    </div>
                    <div class="col-md-12 mt-20">
                      <form action="#">
                        <input type="text" class="acc-input bg-white" placeholder="$44,000 or more" />
                        <input class="acc-profile-btn-one mt-10" type="button" value="Place a Bid" />
                        <input class="acc-profile-btn-two mt-10" type="button" value="+ Add to Watchlist" />
                      </form>
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
                      <img src="assets/images/xd/watch-detail/watch-1/detail-1.png" alt="" class="wd-100" />
                    </div>
                  </div>
                  <div class="row mt-60 mb-60">
                    <div class="col-md-6">
                      <p class="fs-12 text-left wd-95">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain.</p>
                      <p class="fs-12 text-left wd-95">but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain.</p>
                    </div>
                    <div class="col-md-6">
                      <img src="assets/images/xd/watch-detail/watch-1/detail-2.png" alt="" class="wd-100" />
                    </div>
                  </div>
                  <div class="row mt-60 mb-60">
                    <div class="col-md-6">
                      <img src="assets/images/xd/watch-detail/watch-1/detail-3.png" alt="" class="wd-100" />
                    </div>
                    <div class="col-md-6 pl-40">
                      <p class="fs-12 text-left">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain.</p>
                      <p class="fs-12 text-left">but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain.</p>
                    </div>

                  </div>
                  <div class="row mt-60 mb-60">
                    <div class="col-md-12">
                      <img src="assets/images/xd/watch-detail/watch-1/detail-4.png" alt="" class="wd-100" />
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
                <div class="container pl-30 pr-0">
                  <div class="row">
                    <div class="col-md-6 pl-0">
                      <h3>Bid History</h3>
                    </div>
                    <div class="col-md-6">
                      <p class="circle">45</p>
                    </div>
                    <div class="col-md-12 mt-10 h-500 watch-detail-overflow watch-detail-bid p-0" id="style-13">
                      <div class="row bid-history">
                        <div class="col-md-7 m-auto">
                          <h3 class="mb-0 bid-active fw-400 pl-25">$43,000</h3>
                        </div>
                        <div class="col-md-5">
                          <a class="blue" href="#">@jackson50</a>
                          <p class="fs-12">13 hours ago</p>
                        </div>
                        <div class="col-md-12">
                          <hr></hr>
                        </div>
                      </div>
                      <div class="row bid-history">
                        <div class="col-md-7 m-auto">
                          <h3 class="mb-0 bid-delay fw-400 pl-25">$43,000</h3>
                        </div>
                        <div class="col-md-5">
                          <a class="blue" href="#">@jackson50</a>
                          <p class="fs-12">13 hours ago</p>
                        </div>
                        <div class="col-md-12">
                          <hr></hr>
                        </div>
                      </div>
                      <div class="row bid-history">
                        <div class="col-md-7 m-auto">
                          <h3 class="mb-0 bid-delay fw-400 pl-25">$43,000</h3>
                        </div>
                        <div class="col-md-5">
                          <a class="blue" href="#">@jackson50</a>
                          <p class="fs-12">13 hours ago</p>
                        </div>
                        <div class="col-md-12">
                          <hr></hr>
                        </div>
                      </div>
                      <div class="row bid-history">
                        <div class="col-md-7 m-auto">
                          <h3 class="mb-0 bid-delay fw-400 pl-25">$43,000</h3>
                        </div>
                        <div class="col-md-5">
                          <a class="blue" href="#">@jackson50</a>
                          <p class="fs-12">13 hours ago</p>
                        </div>
                        <div class="col-md-12">
                          <hr></hr>
                        </div>
                      </div>
                      <div class="row bid-history">
                        <div class="col-md-7 m-auto">
                          <h3 class="mb-0 bid-delay fw-400 pl-25">$43,000</h3>
                        </div>
                        <div class="col-md-5">
                          <a class="blue" href="#">@jackson50</a>
                          <p class="fs-12">13 hours ago</p>
                        </div>
                        <div class="col-md-12">
                          <hr></hr>
                        </div>
                      </div>
                      <div class="row bid-history">
                        <div class="col-md-7 m-auto">
                          <h3 class="mb-0 bid-delay fw-400 pl-25">$43,000</h3>
                        </div>
                        <div class="col-md-5">
                          <a class="blue" href="#">@jackson50</a>
                          <p class="fs-12">13 hours ago</p>
                        </div>
                        <div class="col-md-12">
                          <hr></hr>
                        </div>
                      </div>
                      <div class="row bid-history">
                        <div class="col-md-7 m-auto">
                          <h3 class="mb-0 bid-delay fw-400 pl-25">$43,000</h3>
                        </div>
                        <div class="col-md-5">
                          <a class="blue" href="#">@jackson50</a>
                          <p class="fs-12">13 hours ago</p>
                        </div>
                        <div class="col-md-12">
                          <hr></hr>
                        </div>
                      </div>
                      <div class="row bid-history">
                        <div class="col-md-7 m-auto">
                          <h3 class="mb-0 bid-delay fw-400 pl-25">$43,000</h3>
                        </div>
                        <div class="col-md-5">
                          <a class="blue" href="#">@jackson50</a>
                          <p class="fs-12">13 hours ago</p>
                        </div>
                        <div class="col-md-12">
                          <hr></hr>
                        </div>
                      </div>
                      <div class="row bid-history">
                        <div class="col-md-7 m-auto">
                          <h3 class="mb-0 bid-delay fw-400 pl-25">$43,000</h3>
                        </div>
                        <div class="col-md-5">
                          <a class="blue" href="#">@jackson50</a>
                          <p class="fs-12">13 hours ago</p>
                        </div>
                        <div class="col-md-12">
                          <hr></hr>
                        </div>
                      </div>
                      <div class="row bid-history">
                        <div class="col-md-7 m-auto">
                          <h3 class="mb-0 bid-delay fw-400 pl-25">$43,000</h3>
                        </div>
                        <div class="col-md-5">
                          <a class="blue" href="#">@jackson50</a>
                          <p class="fs-12">13 hours ago</p>
                        </div>
                        <div class="col-md-12">
                          <hr></hr>
                        </div>
                      </div>
                      <div class="row bid-history">
                        <div class="col-md-7 m-auto">
                          <h3 class="mb-0 bid-delay fw-400 pl-25">$43,000</h3>
                        </div>
                        <div class="col-md-5">
                          <a class="blue" href="#">@jackson50</a>
                          <p class="fs-12">13 hours ago</p>
                        </div>
                        <div class="col-md-12">
                          <hr></hr>
                        </div>
                      </div>
                      <div class="row bid-history">
                        <div class="col-md-7 m-auto">
                          <h3 class="mb-0 bid-delay fw-400 pl-25">$43,000</h3>
                        </div>
                        <div class="col-md-5">
                          <a class="blue" href="#">@jackson50</a>
                          <p class="fs-12">13 hours ago</p>
                        </div>
                        <div class="col-md-12">
                          <hr></hr>
                        </div>
                      </div><div class="row bid-history">
                        <div class="col-md-7 m-auto">
                          <h3 class="mb-0 bid-delay fw-400 pl-25">$43,000</h3>
                        </div>
                        <div class="col-md-5">
                          <a class="blue" href="#">@jackson50</a>
                          <p class="fs-12">13 hours ago</p>
                        </div>
                        <div class="col-md-12">
                          <hr></hr>
                        </div>
                      </div>
                      <div class="row bid-history">
                        <div class="col-md-7 m-auto">
                          <h3 class="mb-0 bid-delay fw-400 pl-25">$43,000</h3>
                        </div>
                        <div class="col-md-5">
                          <a class="blue" href="#">@jackson50</a>
                          <p class="fs-12">13 hours ago</p>
                        </div>
                        <div class="col-md-12">
                          <hr></hr>
                        </div>
                      </div>
                      <div class="row bid-history">
                        <div class="col-md-7 m-auto">
                          <h3 class="mb-0 bid-delay fw-400 pl-25">$43,000</h3>
                        </div>
                        <div class="col-md-5">
                          <a class="blue" href="#">@jackson50</a>
                          <p class="fs-12">13 hours ago</p>
                        </div>
                        <div class="col-md-12">
                          <hr></hr>
                        </div>
                      </div>
                      <div class="row bid-history">
                        <div class="col-md-7 m-auto">
                          <h3 class="mb-0 bid-delay fw-400 pl-25">$43,000</h3>
                        </div>
                        <div class="col-md-5">
                          <a class="blue" href="#">@jackson50</a>
                          <p class="fs-12">13 hours ago</p>
                        </div>
                        <div class="col-md-12">
                          <hr></hr>
                        </div>
                      </div>
                      <div class="row bid-history">
                        <div class="col-md-7 m-auto">
                          <h3 class="mb-0 bid-delay fw-400 pl-25">$43,000</h3>
                        </div>
                        <div class="col-md-5">
                          <a class="blue" href="#">@jackson50</a>
                          <p class="fs-12">13 hours ago</p>
                        </div>
                        <div class="col-md-12">
                          <hr></hr>
                        </div>
                      </div>
                      <div class="row bid-history">
                        <div class="col-md-7 m-auto">
                          <h3 class="mb-0 bid-delay fw-400 pl-25">$43,000</h3>
                        </div>
                        <div class="col-md-5">
                          <a class="blue" href="#">@jackson50</a>
                          <p class="fs-12">13 hours ago</p>
                        </div>
                        <div class="col-md-12">
                          <hr></hr>
                        </div>
                      </div><div class="row bid-history">
                        <div class="col-md-7 m-auto">
                          <h3 class="mb-0 bid-delay fw-400 pl-25">$43,000</h3>
                        </div>
                        <div class="col-md-5">
                          <a class="blue" href="#">@jackson50</a>
                          <p class="fs-12">13 hours ago</p>
                        </div>
                        <div class="col-md-12">
                          <hr></hr>
                        </div>
                      </div>
                      <div class="row bid-history">
                        <div class="col-md-7 m-auto">
                          <h3 class="mb-0 bid-delay fw-400 pl-25">$43,000</h3>
                        </div>
                        <div class="col-md-5">
                          <a class="blue" href="#">@jackson50</a>
                          <p class="fs-12">13 hours ago</p>
                        </div>
                        <div class="col-md-12">
                          <hr></hr>
                        </div>
                      </div>
                      <div class="row bid-history">
                        <div class="col-md-7 m-auto">
                          <h3 class="mb-0 bid-delay fw-400 pl-25">$43,000</h3>
                        </div>
                        <div class="col-md-5">
                          <a class="blue" href="#">@jackson50</a>
                          <p class="fs-12">13 hours ago</p>
                        </div>
                        <div class="col-md-12">
                          <hr></hr>
                        </div>
                      </div>
                      <div class="row bid-history">
                        <div class="col-md-7 m-auto">
                          <h3 class="mb-0 bid-delay fw-400 pl-25">$43,000</h3>
                        </div>
                        <div class="col-md-5">
                          <a class="blue" href="#">@jackson50</a>
                          <p class="fs-12">13 hours ago</p>
                        </div>
                        <div class="col-md-12">
                          <hr></hr>
                        </div>
                      </div>
                      <div class="row bid-history">
                        <div class="col-md-7 m-auto">
                          <h3 class="mb-0 bid-delay fw-400 pl-25">$43,000</h3>
                        </div>
                        <div class="col-md-5">
                          <a class="blue" href="#">@jackson50</a>
                          <p class="fs-12">13 hours ago</p>
                        </div>
                        <div class="col-md-12">
                          <hr></hr>
                        </div>
                      </div><div class="row bid-history">
                        <div class="col-md-7 m-auto">
                          <h3 class="mb-0 bid-delay fw-400 pl-25">$43,000</h3>
                        </div>
                        <div class="col-md-5">
                          <a class="blue" href="#">@jackson50</a>
                          <p class="fs-12">13 hours ago</p>
                        </div>
                        <div class="col-md-12">
                          <hr></hr>
                        </div>
                      </div>

                      <div class="row bid-history">
                        <div class="col-md-7 m-auto">
                          <h3 class="mb-0 bid-delay fw-400 pl-25">$43,000</h3>
                        </div>
                        <div class="col-md-5">
                          <a class="blue" href="#">@jackson50</a>
                          <p class="fs-12">13 hours ago</p>
                        </div>
                        <div class="col-md-12">
                          <hr></hr>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 mt-30 mb-30 pl-0 pr-0">
                      <hr class="watch-detail-hr-bold" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 pl-0">
                      <h3>Ask the Seller</h3>
                    </div>
                    <div class="col-md-6">
                      <p class="circle">15</p>
                    </div>
                    <div class="col-md-12 pl-0 pr-0">
                      <form action="#">
                        <textarea class="acc-input bg-white contact-div-color" name="askquestion" id="askquestion" cols="30" rows="10" placeholder="type your question here"></textarea>
                        <input class="acc-profile-btn-one" type="button" value="Ask a Question" />
                      </form>
                    </div>
                    <div class="col-md-12 mt-10 h-700 watch-detail-overflow watch-detail-bid p-0" id="style-13">
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div><div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div><div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>

                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div><div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
                          </div>
                        </div>

                      </div>
                      <div class="row bid-quote mr-0 ml-0 mb-15">
                        <div>
                          <div class="col-md-12 text-center">
                            <img src="assets/images/xd/icons/quote.png" alt="" />
                            <p class="bid-quote-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the?</p>
                            <a href="#" class="blue">- @jackson50</a>
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
      </React.Fragment>
    );
  }
}
export default ProductsPage