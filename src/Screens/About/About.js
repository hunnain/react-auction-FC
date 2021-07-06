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
        <Header  ChangeView={this.props.ChangeView} toggleLogin={this.props.toggleLogin}/>

        <div class="container-fluid about-main-cont">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center mt-200">
                <h2 class="white">Who we are?</h2>
                <p class="white m-auto about-main-cont-p">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 about-box-1">
              <h2>The Service</h2>
              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain.</p>
            </div>
            <div class="col-md-6 about-div-1">
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 about-div-2">
            </div>
            <div class="col-md-6 about-box-1">
              <h2>The Service</h2>
              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 about-div-3">
              <div class="container mt-200">
                <div class="row">
                  <div class="col-md-4">
                    <h2 class="white">Do you have questions to ask? Message us!</h2>
                    <input class="acc-profile-btn-one about-contact" type="button" value="Contact Us" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-50 mb-30">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <p class="mt-10 about-follow-social">Follow us on socialmedia</p>
                </div>
                <div class="col-md-6 about-follow-social-div">
                  <ul class="about-follow-social-ul">
                    <li>
                      <a href=""><img src={require('../../assets/icons/xd/icons/insta.png')} alt="" /></a>
                    </li>
                    <li>
                      <a href=""><img src={require('../../assets/icons/xd/icons/twitter.png')} alt="" /></a>
                    </li>
                    <li>
                      <a href=""><img src={require('../../assets/icons/xd/icons/linkedin.png')} alt="" /></a>
                    </li>
                    <li>
                      <a href=""><img src={require('../../assets/icons/xd/icons/fb.png')} alt="" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 heroSlider-fixed pl-0 pr-0">
              {/* <div class="overlay">
              </div> */}
              <div class="slider responsive ds-flex">
                <div class="imgs">
                  <img src={require('../../assets/icons/xd/about/slider-1/1.png')} alt="" class="wd-100" />
                  <div class="overlay">
                    <div class="text">Hello World</div>
                  </div>
                </div>
                <div class="imgs">
                  <img src={require('../../assets/icons/xd/about/slider-1/2.png')} alt="" class="wd-100" />
                  <div class="overlay">
                    <div class="text">Hello World</div>
                  </div>
                </div>
                <div class="imgs">
                  <img src={require('../../assets/icons/xd/about/slider-1/3.png')} alt="" class="wd-100" />
                  <div class="overlay">
                    <div class="text">Hello World</div>
                  </div>
                </div>
                <div class="imgs">
                  <img src={require('../../assets/icons/xd/about/slider-1/4.png')} alt="" class="wd-100" />
                  <div class="overlay">
                    <div class="text">Hello World</div>
                  </div>
                </div>
                <div class="imgs">
                  <img src={require('../../assets/icons/xd/about/slider-1/5.png')} alt="" class="wd-100" />
                  <div class="overlay">
                    <div class="text">Hello World</div>
                  </div>
                </div>
                <div class="imgs">
                  <img src={require('../../assets/icons/xd/about/slider-1/6.png')} alt="" class="wd-100" />
                  <div class="overlay">
                    <div class="text">Hello World</div>
                  </div>
                </div>
                <div class="imgs">
                  <img src={require('../../assets/icons/xd/about/slider-1/7.png')} alt="" class="wd-100" />
                  <div class="overlay">
                    <div class="text">Hello World</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="row">
            <div class="col-md-12 heroSlider-fixed pl-0 pr-0">
              {/* <div class="overlay">
              </div> */}
              <div class="slider responsive ds-flex">
                <div class="imgs">
                  <img src={require('../../assets/icons/xd/about/slider-2/1.png')} alt="" class="wd-100" />
                  <div class="overlay">
                    <div class="text">Hello World</div>
                  </div>
                </div>
                <div class="imgs">
                  <img src={require('../../assets/icons/xd/about/slider-2/2.png')} alt="" class="wd-100" />
                  <div class="overlay">
                    <div class="text">Hello World</div>
                  </div>
                </div>
                <div class="imgs">
                  <img src={require('../../assets/icons/xd/about/slider-2/3.png')} alt="" class="wd-100" />
                  <div class="overlay">
                    <div class="text">Hello World</div>
                  </div>
                </div>
                <div class="imgs">
                  <img src={require('../../assets/icons/xd/about/slider-2/4.png')} alt="" class="wd-100" />
                  <div class="overlay">
                    <div class="text">Hello World</div>
                  </div>
                </div>
                <div class="imgs">
                  <img src={require('../../assets/icons/xd/about/slider-2/5.png')} alt="" class="wd-100" />
                  <div class="overlay">
                    <div class="text">Hello World</div>
                  </div>
                </div>
                <div class="imgs">
                  <img src={require('../../assets/icons/xd/about/slider-2/6.png')} alt="" class="wd-100" />
                  <div class="overlay">
                    <div class="text">Hello World</div>
                  </div>
                </div>
                <div class="imgs">
                  <img src={require('../../assets/icons/xd/about/slider-2/7.png')} alt="" class="wd-100" />
                  <div class="overlay">
                    <div class="text">Hello World</div>
                  </div>
                </div>
                <div class="imgs">
                  <img src={require('../../assets/icons/xd/about/slider-2/8.png')} alt="" class="wd-100" />
                  <div class="overlay">
                    <div class="text">Hello World</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer  ChangeView={this.props.ChangeView}/>
      </>
    );
  }
}

export default Dashboard;
