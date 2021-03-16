import App from './App'
import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { Provider } from 'react-redux'
import { createMockStore } from 'redux-test-utils'
configure({ adapter: new Adapter() })

const mockState = {
  reducer: {
    error: null,
    cards: []
  }
}

test('renders app', () => {
  const mockStore = createMockStore(mockState)
  const wrapper = mount(
    <Provider store={mockStore}>
      <App />
    </Provider>
  )
  expect(wrapper).toBeDefined()
})

describe('<App/>', () => {
  it('should render component', () => {
    const mockStore = createMockStore(mockState)
    const wrapper = mount(
      <Provider store={mockStore}>
        <App />
      </Provider>
    )
    expect(wrapper).toBeDefined()
  })
})
