import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import Part from '../../components/presentation/Part';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}>
        <BrowserRouter>
          <Part part={{name:'', life:'', stats:{}}} />
        </BrowserRouter>
      </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
