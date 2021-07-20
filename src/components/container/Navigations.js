import {
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';
import SignUpForm from '../presentation/SignUpForm';
import LogInForm from '../presentation/LogInForm';
import CarForm from '../presentation/CarForm';
import CarDetails from '../presentation/CarDetails';
import About from '../presentation/About';

function Navigations() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sign_up" component={SignUpForm} />
      <Route exact path="/log_in" component={LogInForm} />
      <Route exact path="/new_car" component={CarForm} />
      <Route exact path="/details" component={CarDetails} />
      <Route exact path="/about" component={About} />
    </Switch>
  );
}

export default Navigations;
