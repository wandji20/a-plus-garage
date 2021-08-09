import {
  Switch,
  Route,
} from 'react-router-dom';

import SignUpForm from '../presentation/SignUpForm';
import LogInForm from '../presentation/LogInForm';
import CarForm from '../presentation/CarForm';
import About from '../presentation/About';
import Cars from './Cars';

function Navigations() {
  return (
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/" component={Cars} />
      <Route exact path="/sign_up" component={SignUpForm} />
      <Route exact path="/log_in" component={LogInForm} />
      <Route exact path="/new_car" component={CarForm} />
    </Switch>
  );
}

export default Navigations;
