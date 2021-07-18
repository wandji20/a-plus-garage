import {
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';
import SignUpForm from '../presentation/SignUpForm';
import LogInForm from '../presentation/LogInForm';

function Navigations() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sign_up" component={SignUpForm} />
      <Route exact path="/log_in" component={LogInForm} />
    </Switch>
  );
}

export default Navigations;
