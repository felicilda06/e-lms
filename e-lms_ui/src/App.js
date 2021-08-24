import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Announcement from './pages/Announcement';
import LandingPage from '../src/pages/LandingPage';
import Header from '../src/components/Header';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>   
        <Route exact path="/" component={LandingPage}/>
        <Route path="/announcement" component={Announcement}/>
      </Switch>
    </Router>
  );
}

export default App;
