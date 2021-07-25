import {
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';
import SignUpForm from '../presentation/SignUpForm';
import LogInForm from '../presentation/LogInForm';
import CarForm from '../presentation/CarForm';
import About from '../presentation/About';
import Cars from './Cars';

function Navigations() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cars" component={Cars} />
      <Route exact path="/sign_up" component={SignUpForm} />
      <Route exact path="/log_in" component={LogInForm} />
      <Route exact path="/new_car" component={CarForm} />
      <Route exact path="/about" component={About} />
    </Switch>
  );
}

export default Navigations;
