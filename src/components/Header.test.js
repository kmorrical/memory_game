import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header.js';
configure({adapter: new Adapter()})

describe('<Header/>', () => {
    it('renders', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper).toBeDefined();
    });

    it('renders the Titles text', () => { 
        const wrapper = shallow(<Header/>);
        expect(wrapper.find('div').text()).toEqual("Blogtastic");
      });
});