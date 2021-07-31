import React, { useState } 	from "react"; //useEffect
import { Route } 			from 'react-router-dom';  
import { Modal, Button } 	from 'react-bootstrap';
import axios 				from 'axios'
import qs    				from 'qs';

import "./assets/css/bootstrap.min.css"
import "./assets/css/icons.min.css"
import "./assets/css/plugins.css"
// import "./assets/css/plugins.css"
import "./assets/css/style.css"
import { setUserSession,getToken,removeUserSession } from '../../Utils/Common';


const WebLayout = ({ children }) => {
	const [show, setLoginShow] = useState(false);
	const handleLoginClose = () => setLoginShow(false);
	const handleLoginShow = (e) =>{ 
		e.preventDefault();
		setLoginShow(true)
	};
	const [registerShow, setRegisterShow] = useState(false);
	const handleRegisterClose = () => setRegisterShow(false);
	const handleRegisterShow = (e) =>{ 
		e.preventDefault();
		setRegisterShow(true)
	};
	const handleLogout = (e) =>{ 
		e.preventDefault();
		removeUserSession()
		window.location.reload()
	};
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");

	const [registerFirstname, setRegisterFirstname] = useState("");
	const [registerLastname, setRegisterLastname] = useState("");
	const [registerEmail, setRegisterEmail] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	
	
	function loggin() {

		console.log("loggin")
		var data = JSON.stringify({
			'email': loginEmail,
			'password': loginPassword
		});
		console.log(data)
		var config = {
			method: 'post',
			url: window.$base_api+'/api/authentication',
			headers: {
				'Content-Type': 'application/json'
			},
			data: data
		};
		axios(config)
		.then(function (response) {
			console.log("loggin success-->",response.data);
			setUserSession(response.data)
			window.location.reload()
		})
		.catch(function (error) {
			console.log("loggin failed-->",error);
		});
		
	}

	function register() {

		console.log("register")
		var data = JSON.stringify({
			'firstName': registerFirstname,
			'lastName': registerLastname,
			'email': registerEmail,
			'password': registerPassword,
			'mobileNo': Math.floor(Math.random() * 100000000) //Need to change
		});
		console.log(data);
		var config = {
			method: 'post',
			url: window.$base_api+'/api/signupauth',
			headers: {
				'Content-Type': 'application/json'
			},
			data: data
		};
		axios(config)
		.then(function (response) {
			console.log("register success-->",response.data);
			// setUserSession(response.data)
			window.location.reload()
		})
		.catch(function (error) {
			console.log("register failed-->",error);
		});
	}

    // this.state = { value: 'Hello World' };
	const isLoggedIn = getToken();
	return (                         
	<>
    	<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
		<header className="header-area header-padding-1 sticky-bar header-res-padding clearfix">
			<div className="container-fluid">
				<div className="container">
					<div className="row">
					<div className="col-xl-2 col-lg-2 col-md-4 col-4">
						<div className="logo">
						<a href="/">
							<h5 className="logo-heading">WatchTrade</h5>
						</a>
						</div>
					</div>
					<div className="col-xl-10 col-lg-10 d-none d-lg-block">
						<div className="main-menu">
						<nav>
							<ul>
								<li><a href="/auction"> Auctions </a></li>
								<li><a href="/sell"> Sell Now </a></li>
								{
									isLoggedIn == null &&
									<li onClick={handleRegisterShow}><a href="#"> Register </a></li>
								}
								
								{ isLoggedIn == null ?
								<li onClick={handleLoginShow}><a href="#" > Login </a></li>
								:
								<li onClick={handleLogout}><a href="#"> Logout </a></li>
								}
								
							</ul>
						</nav>
						</div>
					</div>
					</div>
					<div className="mobile-menu-area">
					<div className="mobile-menu">
						<nav id="mobile-menu-active">
						<ul className="menu-overflow">
							<li><a href="#"> Auctions </a></li>
							<li><a href="#"> Sell Now </a></li>
							<li><a href="#"> Register </a></li>
							<li><a href="#"> Login </a></li>
						</ul>
						</nav>
					</div>
					</div>
				</div>
			</div>
		</header>
		
		{children} 
		
		<footer className="footer-area bg-gray">
			<div className="container-fluid footer-cont">
				<div className="container pt-100 pb-40">
					<div className="row">
						<div className="col-lg-3 col-md-3 col-sm-3">
							<div className="copyright mb-30 ">
								<div className="footer-logo">
									<a href="index.html">
										<h5 className="logo-heading footer-logo-heading">WatchTrade</h5>
									</a>
								</div>
								<p className="pt-60">But I must explain to you how all this mistaken idea of
									denouncing pleasure and praising pain was born and I will give you a complete account of
									the system, and expound the actual teachings of the great explorer of the truth.</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-3">
							<div className="footer-widget mb-30 text-center">
								<div className="footer-title">
									<h3>Auctions</h3>
								</div>
								<div className="footer-list pt-50">
									<ul>
										<li><a href="#">Live Auctions</a></li>
										<li><a href="#">Coming Soon</a></li>
										<li><a href="#">Recently Sold</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-3">
							<div className="footer-widget mb-30 ml-30">
								<div className="footer-title">
									<h3>Company</h3>
								</div>
								<div className="footer-list pt-50">
									<ul>
										<li><a href="#">Privacy Policy</a></li>
										<li><a href="#">Terms & Conditions</a></li>
										<li><a href="#">Cookie Policy</a></li>
										<li><a href="/contact">Contact us</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-3">
							<div className="footer-widget mb-30 ">
								<div className="footer-title">
									<h3>Sell with WatchTrade</h3>
								</div>
								<div className="footer-list pt-50">
									<ul>
										<li><a href="#">Sell Now</a></li>
										<li><a href="/about">About Watch Trade</a></li>
										<li><a href="#">Sell Now</a></li>
										<li><a href="/faq">FAQ's</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid footer-end-cont">
				<div className="container m-auto">
					<div className="row">
						<div className="col-md-4">
							<p className="white footer-end-p">WatchTrade © 2021</p>
						</div>
						<div className="col-md-8">
							<div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>      
		
		<Modal show={show} onHide={handleLoginClose} animation={false}>
			<Modal.Header closeButton>
				<Modal.Title></Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="row">
					<div className="col-md-12 col-sm-12 col-xs-12">
						<h4 className="mb-60 text-center login-modal-sign">Sign in to WatchTrade</h4>
					</div>
					<div className="col-md-12 col-sm-12 col-xs-12">
						<form className="form-control login-modal-form">
							<input type="text" className="form-control login-email" onChange={(e) => setLoginEmail(e.target.value)} placeholder="Email Address" />
							<div className="form-group mt-20">
								<div className="input-group" id="show_hide_password">
									<input className="form-control login-password" onChange={(e) => setLoginPassword(e.target.value)} placeholder="Password"
										type="password" />
									<div className="input-group-addon">
										<a href=""><i className="fa fa-eye-slash" aria-hidden="true"></i></a>
									</div>
								</div>
							</div>
							<a href="#">Forget Password?</a>
							<button className="login-btn mt-30 mb-25" onClick={loggin} type="button">Login to Account</button>
							<div className="sideline">OR</div>
							<div className="social-login-content mt-30 mb-25">
								<div className="social-button">
									<button className="google-btn mb-15"><i className="fab fa-google mr-20"></i>Login with
										Google</button>
									<button className="facebook-btn"><i className="fab fa-facebook mr-20"></i>Login with
										Facebook</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				{/* <Button variant="secondary" onClick={handleLoginClose}>
					Close
				</Button>
				<Button variant="primary" onClick={handleLoginClose}>
					Save Changes
				</Button> */}
			</Modal.Footer>
		</Modal>
		
		<Modal show={registerShow} onHide={handleRegisterClose} animation={false}>
			<Modal.Header closeButton>
				<Modal.Title></Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="row">
					<div className="col-md-12 col-sm-12 col-xs-12">
						<h4 className="mb-60 text-center login-modal-sign">Sign up to WatchTrade</h4>
					</div>
					<div className="col-md-12 col-sm-12 col-xs-12">
						<form className="form-control login-modal-form">
							<div className="form-group mt-20">
								<input type="text" className="form-control login-email" onChange={(e) => setRegisterFirstname(e.target.value)} placeholder="Firstname" />
							</div>
							<div className="form-group mt-20">
								<input type="text" className="form-control login-email" onChange={(e) => setRegisterLastname(e.target.value)} placeholder="Lastname" />
							</div>
							<input type="text" className="form-control login-email" onChange={(e) => setRegisterEmail(e.target.value)} placeholder="Email Address" />
							<div className="form-group mt-20">
								<div className="input-group" id="show_hide_password">
									<input className="form-control login-password" onChange={(e) => setRegisterPassword(e.target.value)} placeholder="Password"
										type="password" />
									<div className="input-group-addon">
										<a href=""><i className="fa fa-eye-slash" aria-hidden="true"></i></a>
									</div>
								</div>
							</div>
							<a href="#">Forget Password?</a>
							<button className="login-btn mt-30 mb-25" type="button" onClick={register}>Create New Account</button>
							<div className="sideline">OR</div>
							<div className="social-login-content mt-30 mb-25">
								<div className="social-button">
									<button className="google-btn mb-15"><i className="fab fa-google mr-20"></i>Login with
										Google</button>
									<button className="facebook-btn"><i className="fab fa-facebook mr-20"></i>Login with
										Facebook</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				{/* <Button variant="secondary" onClick={handleLoginClose}>
					Close
				</Button>
				<Button variant="primary" onClick={handleLoginClose}>
					Save Changes
				</Button> */}
			</Modal.Footer>
		</Modal>
   	</>
)};  
  
const WebLayoutRoute = ({component: Component, ...rest}) => {  
	
    return (  
      <Route {...rest} render={matchProps => (  
        <WebLayout>  
            <Component {...matchProps} />  
        </WebLayout>  
      )} />  
    )  
};  
  
export default WebLayoutRoute; 