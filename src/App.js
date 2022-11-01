import './App.css';
import { ReactDOM } from 'react-dom';
import { BrowserRouter as Router,Routes, Route, Link, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage.component'
import HomePage from './Components/Home.component'
import ApplyPage from './Components/ApplyPage.component'
import RecruitersPage from './Components/RecruitersPage.component'

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/Home" component={HomePage} />
      <Route exact path="/Apply" component={ApplyPage} />
      <Route exact path="/RecruitersPage" component={RecruitersPage} />
      
      </Switch>
  </Router>


  );
}

export default App;