import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import About from '../../components/presentation/About';

it('renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}><About /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
