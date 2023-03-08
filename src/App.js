import './App.css';
import { ReactDOM } from 'react-dom';
import { BrowserRouter as Router,Routes, Route, Link, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage.component'
import HomePage from './Components/Home.component'
import ApplyPage from './Components/ApplyPage.component'
import RecruitersPage from './Components/RecruitersPage.component'
import RecruitersProfile from './Components/recruitersprofile/recuiterprofile.component';
import Apply from './Components/apply.component';
import Jobs from './Components/jobs.component';
import Profile from './Components/profile.component';


function App() {
  
  

  return (
    <Router>
      <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/Home" component={HomePage} />
      <Route exact path="/Jobs" component={Jobs} />
      <Route exact path="/Apply" component={Apply} />
      <Route exact path="/RecruitersPage" component={RecruitersPage} />
      <Route exact path="/RecruitersProfile" component={RecruitersProfile} />
      <Route exact path="/Profile" component={Profile} />
      
      </Switch>
  </Router>


  );
}

export default App;