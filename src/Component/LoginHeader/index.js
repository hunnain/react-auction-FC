import React, { Component, lazy } from 'react'


class Dashboard extends Component {

  render() {
    return (
      <>
        <header class="header-area header-padding-1 sticky-bar header-res-padding clearfix">
          <div class="container-fluid">
            <div class="container">
              <div class="row">
                <div class="col-xl-2 col-lg-2 col-md-4 col-4">
                  <div class="logo">
                    <a href="index.html">
                      <h5 class="logo-heading">WatchTrade</h5>
                    </a>
                  </div>
                </div>
                <div class="col-xl-10 col-lg-10 d-none d-lg-block">
                  <div class="main-menu">
                    <nav>
                      <ul>
                        <li onClick={()=>this.props.ChangeView('Dashboard')}><a href="#" > Auctions </a></li>
                        <li onClick={()=>this.props.ChangeView('SellWatch')}><a href="#"> Sell Now </a></li>
                        <li><a  href="#"> Register </a></li>
                        <li onClick={()=>this.props.ChangeView('AccountProfile')}><a href="#" data-toggle="modal" data-target="#loginModal" > Login </a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div class="mobile-menu-area">
                <div class="mobile-menu">
                  <nav id="mobile-menu-active">
                    <ul class="menu-overflow">
                      <li><a href="#"> Auctions </a></li>
                      <li><a href="#"> Sell Now </a></li>
                      <li><a href="#"> <i class="fas fa-bell"></i> </a></li>
                      <li><a href="#"> <img class="login-nav-img" alt="profile image" src={require('../../assets/icons/xd/profile/profile-1.png')} /> </a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Dashboard;
