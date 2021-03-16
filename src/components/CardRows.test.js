import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import CardRows from './CardRows.js'
import { Provider } from 'react-redux'
import { createMockStore } from 'redux-test-utils'
configure({ adapter: new Adapter() })

describe('<CardRows/>', () => {
  const propsError = {
    reducer: {
      cards: [],
      error: 'error'
    }
  }

  const props = {
    reducer: {
      cards: [{ code: '5S' }, { code: 'KS' }],
      error: null,
      matchedPairs: 0
    }
  }

  it('renders when there are cards', () => {
    const store = createMockStore(props)
    const wrapper = mount(
      <Provider store={store}>
        <CardRows />
      </Provider>
    )
    expect(wrapper).toBeDefined()
    expect(wrapper.find('div.error_container').length).toEqual(0)
    expect(wrapper.find('div.card_row_container').length).toEqual(1)
  })

  it('renders when error', () => {
    const store = createMockStore(propsError)
    const wrapper = mount(
      <Provider store={store}>
        <CardRows />
      </Provider>
    )
    expect(wrapper).toBeDefined()
    expect(wrapper.find('div.card_row_container').length).toEqual(0)
    expect(wrapper.find('div.error_container').length).toEqual(1)
  })
})
