import React from 'react';  

import {
	BrowserRouter as Router,
	Switch,
	Redirect
} from 'react-router-dom' //Route, Redirect
import { getToken } from './Utils/Common';

/** Layouts **/  
import WebLayoutRoute 	from "./Layouts/Web";  
  
/** Components **/  
// Web
import WebIndexPage 	from './Pages/Web/Index' 
import WebAuctionPage 	from './Pages/Web/Auction' 
import WebSellPage 		from './Pages/Web/Sell' 
import WebAboutPage 	from './Pages/Web/About' 
import WebConatctPage 	from './Pages/Web/Contact' 
import WebFaqPage 		from './Pages/Web/Faq' 
import ProductsPage 	from './Pages/Web/Products' 


function App() {
	return ( 
		<Router >
			<Switch>  
				{/* <Route exact path="/">  
					<Redirect to="/layout1" />  
				</Route>   */}  
				
				<WebLayoutRoute exact path="/" 			component={WebIndexPage} />  
				<WebLayoutRoute exact path="/product/:_id" 			component={ProductsPage} />  
				<WebLayoutRoute  path="/auction" 	component={WebAuctionPage} />  
				<WebLayoutRoute  path="/sell" 		component={WebSellPage} />  
				<WebLayoutRoute  path="/about" 	component={WebAboutPage} />  
				<WebLayoutRoute  path="/contact" 	component={WebConatctPage} />  
				<WebLayoutRoute  path="/faq" 		component={WebFaqPage} />
				
			</Switch> 
		</Router>
	);
}

export default App;
