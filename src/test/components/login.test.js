import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import LogInForm from '../../components/presentation/LogInForm';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}>
        <BrowserRouter>
          <LogInForm />
        </BrowserRouter>
      </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
