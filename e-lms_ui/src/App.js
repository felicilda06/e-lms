import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword';
import LandingPage from '../src/pages/LandingPage';
import TrialAccount from './pages/TrialAccount';
import Header from '../src/components/Header';
import SignUp from './pages/SignUp'
import Footer from './components/Footer'
import './styles/style.css';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>   
        <Route exact path="/" component={LandingPage}/>
        <Route path="/trial" component={TrialAccount}/>
        <Route path="/forgot-password" component={ForgotPassword}/>
        <Route path="/signup" component={SignUp}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
