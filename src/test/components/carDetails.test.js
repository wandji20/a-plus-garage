// import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import CarDetails from '../../components/presentation/CarDetails';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}>
        <BrowserRouter>
          <CarDetails id={1} />
        </BrowserRouter>
      </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
