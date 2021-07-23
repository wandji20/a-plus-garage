// import React from 'react';
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
// it('renders properly', () => {
//   const tree = renderer
//     .create(<About/>)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });
