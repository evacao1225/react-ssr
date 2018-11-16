import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom';

import NavBar from './navBar';
import routes from '../routes';
import NotFound from './not_found';

class App extends Component {

  render() {
    return (
       <div id="app-container">
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
    );
  }
}
 
export default App;
