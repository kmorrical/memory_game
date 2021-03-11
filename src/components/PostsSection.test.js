import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PostsSection from './PostsSection.js';
configure({adapter: new Adapter()})

describe('<PostsSection>', () => {
    const props = {
        posts: [],
        postsTitle: "User Posts", 
        loading: true,
        error: null
    };

    const propsError = {
        posts: [{userId: 2, title: "hello", body: "world"}, {userId: "1", title: "hi", body: "universe"}],
        postsTitle: "User Posts", 
        loading: false,
        error: null
    };


    const propsLoading = {
        posts: [],
        postsTitle: "User Posts", 
        loading: false,
        error: null
    };


    it('renders when there are posts', () => {
        const wrapper = shallow(<PostsSection {...props}/>);
        expect(wrapper).toBeDefined();
    });

    it('renders when loading', () => {
        const wrapper = shallow(<PostsSection {...propsLoading}/>);
        expect(wrapper).toBeDefined();
    });

    it('renders when error', () => {
        const wrapper = shallow(<PostsSection {...propsError}/>);
        expect(wrapper).toBeDefined();
    });


});