import './index.css';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
     <Router>
        <Header/>
        <Switch/>
         <LandingPage exact path={'/'}/>
        <Route/>
     </Router>
  );
}

export default App;
