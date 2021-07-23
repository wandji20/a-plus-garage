import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import Footer from '../../components/container/Footer';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
