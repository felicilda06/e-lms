import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPage from '../src/pages/LandingPage';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Header/>

          {/* tata */}
          <LandingPage/>

          {/* <Footer/> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;