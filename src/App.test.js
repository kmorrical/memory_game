import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import {shallow, configure, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Provider} from 'react-redux';
import {createMockStore} from 'redux-test-utils';
configure({adapter: new Adapter()})

const mockState = {
  reducer: {
    error: null,
    loading: false,
    myPosts: [],
    posts: [],
    userPosts: []
  }
};

test('renders app', () => {
  const mockStore = createMockStore(mockState);
  const wrapper = mount(
    <Provider store={mockStore}>
      <App/>
    </Provider>
  );
  expect(wrapper).toBeDefined();
});
