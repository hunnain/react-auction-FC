import React, { Component, lazy } from 'react'
import Header from '../../Component/Header'
import localForage from 'localforage';
import { updateProfile } from '../../Controllers/UserBidPanel'
import { toast } from 'react-toastify';

import Footer from '../../Component/Footer'
import AccountSideBar from '../../Component/AccountSideBar'


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            mobile: "",
            email: "",
            oldPassword:"",
            newPassword:"",
            retypeNewPassword:"",
        };
    }
    async componentDidMount() {
        let userDetail = await localForage.getItem('userDetail');
        let details = JSON.parse(userDetail)
        console.log('===>', JSON.parse(userDetail));
        this.setState({ 
            firstName: details.firstName,
            lastName: details.lastName,
            mobile: details.mobileNo,
            email: details.email
        })
    }
    updateProfile=async()=>{
        let res = await updateProfile(this.state).then(resp =>
            resp.json().then(data => ({
              data: data,
              status: resp.status
            }))).then(async res => {
              console.log(res.data.user);
              if (res) {
                if (res.status === 200) {

                }
              
              }
            }).catch((err) => {
              this.setState({ isLoading: false })
              toast.error(err)
    
            })
    }
    render() {
        return (
            <>
                <Header ChangeView={this.props.ChangeView} toggleLogin={this.props.toggleLogin} />
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
                             
                                <AccountSideBar ChangeView={this.props.ChangeView} profile={true} />
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
                                                                        <input type="text" class="acc-input" value={this.state.firstName} onChange={(e)=>this.setState({firstName:e.target.value})} placeholder="First Name" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6">
                                                                    <div class="billing-info">
                                                                        <input type="text" class="acc-input" value={this.state.lastName} onChange={(e)=>this.setState({lastName:e.target.value})} placeholder="Last Name" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6">
                                                                    <div class="billing-info">
                                                                        <input type="text" class="acc-input" value={this.state.mobile} onChange={(e)=>this.setState({mobile:e.target.value})} placeholder="Mobile #" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6">
                                                                    <div class="billing-info">
                                                                        <input type="email" class="acc-input" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} placeholder="Email address" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3 col-md-3">
                                                                    <div class="billing-info">
                                                                        <input class="acc-profile-btn-one" type="button" value="Update"  onClick={() => this.updateProfile()}/>
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
                                                                                <input class=" login-password" placeholder="Old Password" name="oldPassword"  value={this.state.oldPassword} onChange={(e)=>this.setState({oldPassword:e.target.value})} type="password" />
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
                                                                                <input class=" login-password" name="newPassword"  value={this.state.newPassword} onChange={(e)=>this.setState({newPassword:e.target.value})} placeholder="New Password" type="password" />
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
                                                                                <input class=" login-password" placeholder="Retype New Password" name="retypeNewPassword"  value={this.state.retypeNewPassword} onChange={(e)=>this.setState({retypeNewPassword:e.target.value})} type="password" />
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
                <Footer ChangeView={this.props.ChangeView} />
            </>
        );
    }
}

export default Dashboard;
