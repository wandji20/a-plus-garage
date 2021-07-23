// import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import Button from '../../components/presentation/Button';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}>
        <BrowserRouter>
          <Button />
        </BrowserRouter>
      </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
