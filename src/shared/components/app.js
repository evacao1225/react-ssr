import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom';

import NavBar from './navBar';
import routes from '../routes';
import NotFound from './not_found';
import Header from './header';
import Footer from './footer';

class App extends Component {

  render() {
    return (
       <div id="app-container">
			 	 <Header />
				 <div id="main">
			 	 		<NavBar />
				 		<div id="main-content" className="wrap-inner">
				    		<Switch>
						  	{
									routes.map(({ path, exact, component: Component, ...rest}) => (
										<Route key={path} path={path} exact={exact} render={
											(props) => (
												<Component {...props} {...rest} />
											)
										} />
									))
								}
								<Route render={(props) => (
									<NotFound {...props} />
								)} />
								</Switch>
				 		</div>
				 </div>
				 <Footer />
       </div>
    );
  }
}
 
export default App;
