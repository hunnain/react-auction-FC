import React from 'react';  
import { Message, Form } from "semantic-ui-react";

  class ContactPage extends React.Component {
    state = {
        fname: '',
        lname: '',
        mobile: '',
        email: '',
        subject: '',
        message: '',
        formError: false,
        formSuccess: false
      };
    /* This is where the magic happens 
    */
    handleSubmit = event => {
        event.preventDefault();
        return fetch(window.$base_api+'/web/leads/create', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log("Response"+response);
            if (response.message == "Query has been added, it is now in reveiw process!") {
                return response;
                window.location.reload();
                this.setState({formError: false, formSuccess: true});
              } else {
               console.log('Somthing happened wrong');
               this.setState({formError: true, formSuccess: false});
              }
              
        }).catch(err => err);
        
    }
    handleChange = event =>{
        console.log(event.target.name);
        if (event.target.name === 'fname') {
            this.setState({ fname: event.target.value, });
        } else if (event.target.name === 'lname') {
            this.setState({ lname: event.target.value, });
        } else if (event.target.name === 'mobile') {
            this.setState({ mobile: event.target.value, });
        } else if (event.target.name === 'email') {
            this.setState({ email: event.target.value, });
        } else if (event.target.name === 'subject') {
            this.setState({ subject: event.target.value, });
        } else if (event.target.name === 'message') {
            this.setState({ message: event.target.value, });
        }
        
      }
    render() {
        
      return ( 
        
        <React.Fragment>
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
                <form onSubmit = { this.handleSubmit }>
                    <div class="row">
                        <div class="col-md-8 mb-20">
                            <p>Anything you need help with? Please fill in the form below and we will aim to come back to you shortly.</p>
                        </div>
                        <div class="col-md-4 mb-20">
                        </div>

                        <div class="col-md-6 mb-15">
                            <input type="text" onChange= {this.handleChange} name="fname" class="acc-input bg-white" placeholder="First Name" />
                        </div>
                        <div class="col-md-6 mb-15">
                            <input type="text" onChange= {this.handleChange} name="lname" class="acc-input bg-white" placeholder="Last Name" />
                        </div>
                        <div class="col-md-6 mb-15">
                            <input type="number" onChange= {this.handleChange} name="mobile" class="acc-input bg-white" placeholder="Mobile #" />
                        </div>
                        <div class="col-md-6 mb-15">
                            <input type="text" onChange= {this.handleChange} name="email" class="acc-input bg-white" placeholder="Email address" />
                        </div>
                        <div class="col-md-12 mb-15">
                            <input type="text" onChange= {this.handleChange} name="subject" class="acc-input bg-white" placeholder="Subject" />
                        </div>
                        <div class="col-md-12 mb-15">
                            <textarea onChange= {this.handleChange} name="message" class="acc-input bg-white contact-div-color" id="sell-watch-detail" cols="30" rows="10" placeholder="type your message here."></textarea>
                        </div>
                        <div class="col-md-3">
                            <button class="acc-profile-btn-one contact-btn" type = "submit"> Send Message </button>
                        </div>
                        { this.state.formSuccess &&
                        <Message
                            success
                            header="Form completed"
                            content="Thank you for your contribution."
                        />
                        }
                        
                        { this.state.formError &&
                        <Message
                            error
                            header="Missing fields!" 
                            list={['All fields must be filled.']}
                        />
                        }
                    </div>
                </form>
                
            </div>
            <div class="col-md-1">
                
            </div>
            <div class="col-md-5">
                <div class="row">
                    <div class="col-md-12 mb-30">
                        <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>

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
</React.Fragment>
      );
    }
  }
export default ContactPage  