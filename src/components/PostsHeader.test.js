import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PostsHeader from './PostsHeader.js';
configure({adapter: new Adapter()})

describe('<PostsHeader />', () => {
    const props = {
        title: "User Posts"
    };

    it('renders', () => {
        const wrapper = shallow(<PostsHeader {...props}/>);
        expect(wrapper.find("div.posts_header").text()).toEqual("User Posts");
        expect(wrapper).toBeDefined();
    });

});