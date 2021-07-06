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
import { ContactUsCallPost } from '../../Controllers/DashboardController'

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
          firstName: "",
          lastName: "",
          mobile: "",
          email: "",
          subject: "",
          description: ""
        };
      }

    setValue = (event) => {
        let target = event.target;
     if(target.name === "firstName"){
         this.setState({firstName:target.value})
     }
     if(target.name === "lastName"){
         this.setState({lastName:target.value})
     }
     if(target.name === "mobile"){
         this.setState({mobile:target.value})
     }
     if(target.name === "email"){
         this.setState({email:target.value})
     }
     if(target.name === "subject"){
         this.setState({subject:target.value})
     }
     if(target.name === "description"){
         this.setState({description:target.value})
     }
    }
    submitForm =async()=>{
        let res = await ContactUsCallPost(this.state)
        console.log(this.state);
    }
    render() {
        return (
            <>
                <Header ChangeView={this.props.ChangeView} toggleLogin={this.props.toggleLogin}/>
                <div class="container-fluid contact-main-cont">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h1 class="white pt-400">Contact Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid pt-50 pb-50 bg-all">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <form >
                                    <div class="row">
                                        <div class="col-md-8 mb-20">
                                            <p>Anything you need help with? Please fill in the form below and we will aim to come back to you shortly.</p>
                                        </div>
                                        <div class="col-md-4 mb-20">
                                        </div>

                                        <div class="col-md-6 mb-15">
                                            <input type="text" value={this.state.firstName} name="firstName" onChange={(ev) => this.setValue(ev)} class="acc-input bg-white" placeholder="First Name" />
                                        </div>
                                        <div class="col-md-6 mb-15">
                                            <input type="text" class="acc-input bg-white" value={this.state.lastName} name="lastName" onChange={(ev) => this.setValue(ev)} placeholder="Last Name" />
                                        </div>
                                        <div class="col-md-6 mb-15">
                                            <input type="number" class="acc-input bg-white" value={this.state.mobile} name="mobile" onChange={(ev) => this.setValue(ev)} placeholder="Mobile #" />
                                        </div>
                                        <div class="col-md-6 mb-15">
                                            <input type="text" class="acc-input bg-white" value={this.state.email} name="email" onChange={(ev) => this.setValue(ev)} placeholder="Email address" />
                                        </div>
                                        <div class="col-md-12 mb-15">
                                        <input type="text" class="acc-input bg-white" value={this.state.subject} name="subject" onChange={(ev) => this.setValue(ev)} placeholder="Email address" />
                                        </div>
                                        <div class="col-md-12 mb-15">
                                            <textarea class="acc-input bg-white contact-div-color"  value={this.state.description} name="description" onChange={(ev) => this.setValue(ev)} id="sell-watch-detail" cols="30" rows="10"  placeholder="type your message here."></textarea>
                                        </div>
                                        <div class="col-md-3">
                                            <input class="acc-profile-btn-one contact-btn" type="button" value="Send Message" onClick={() =>this.submitForm()}/>
                                        </div>
                                    </div>
                                </form>

                            </div>
                            <div class="col-md-1">

                            </div>
                            <div class="col-md-5">
                                <div class="row">
                                    <div class="col-md-12 mb-30">
                                        <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>

                                        <h3 class="mb-10 mt-30 fw-400">Office Address:</h3>
                                        <p>2410 Little Mountain Apt. 536, Port Savannah, AZ 32936-8294, Poland</p>
                                    </div>
                                    <div class="col-md-4 contact-tel">
                                        <h3 class="fw-400">Tel #:</h3>
                                        <p>123-3453-3543</p>
                                    </div>
                                    <div class="col-md-4">
                                        <h3 class="fw-400">Time Left</h3>
                                        <p>123-3453-3543</p>
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

export default ContactUs;
