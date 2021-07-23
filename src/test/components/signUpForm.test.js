import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import SignUpForm from '../../components/presentation/SignUpForm';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}>
        <BrowserRouter>
          <SignUpForm />
        </BrowserRouter>
      </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
