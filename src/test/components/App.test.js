import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import App from '../../components/container/App';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
