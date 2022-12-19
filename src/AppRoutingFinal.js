import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoardPage from './pages/dashboard/DashBoard';


function AppRoutingFinal() {

  // TODO Change to value from sessionStorage or something dynamic

let loggedIn = true;

  return (
    <Router>
    {/* Router Switch */}
      <Switch>
      {/* Redirections to protect our routes */}
        <Route exact path='/' >
          {
            loggedIn ?
            (<Redirect from='/' to='/dashboard' />) :
            (<Redirect from='/' to='/login' />)
          }
        </Route>
        {/* Login route */}
        <Route exact path='/login' component={ LoginPage } />
        {/* DashBoard route */}
        <Route exact path='/dashboard' >
          {
            loggedIn ?
            (<DashBoardPage/>)  
            :
            (<Redirect from='/' to='/login' />)
          }
        </Route>
        <Route component={ NotFoundPage } />
      </Switch>
    </Router>
  );
}

export default AppRoutingFinal;
