import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Nav from '../presentation/Nav';
import Home from './Home';
import SignUpForm from '../presentation/SignUpForm';
import LogInForm from '../presentation/LogInForm';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sign_up" component={SignUpForm} />
        <Route exact path="/log_in" component={LogInForm} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
