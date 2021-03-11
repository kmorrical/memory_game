import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PostsCol from './PostsCol.js';
configure({adapter: new Adapter()})

describe('<PostsCol/>', () => {
    const propsLoading = {
        posts: [],
        postsTitle: "User Posts", 
        loading: true,
        error: null
    };

    const propsError = {
        posts: [],
        postsTitle: "User Posts", 
        loading: false,
        error: null
    };

    const props = {
        posts: [{userId: 2, title: "hello", body: "world"}, {userId: "1", title: "hi", body: "universe"}],
        postsTitle: "User Posts", 
        loading: false,
        error: null
    };


    it('renders when loading', () => {
        const wrapper = shallow(<PostsCol {...propsLoading}/>);
        expect(wrapper.find("div.post_container").length).toEqual(0);
        expect(wrapper).toBeDefined();
    });

    it('renders when error', () => {
        const wrapper = shallow(<PostsCol {...propsError}/>);
        expect(wrapper).toBeDefined();
        expect(wrapper.find("div.post_container").length).toEqual(0);

    });
    
    it('renders when there are posts', () => {
        const wrapper = shallow(<PostsCol {...props}/>);
        expect(wrapper).toBeDefined();
    });

    it('renders the Titles props', () => { 
        const wrapper = shallow(<PostsCol {...props}/>);
        // expect(wrapper.find("div.post_title").text()).toEqual("User Posts");
        expect(wrapper.find("div.post_container").length).toEqual(2);
        expect(wrapper.find("div.user_name").at(0).text()).toEqual("2");
        expect(wrapper.find("div.post_title").at(0).text()).toEqual("hello");
        expect(wrapper.find("div.post_body").at(0).text()).toEqual("world");
        expect(wrapper.find("div.user_name").at(1).text()).toEqual("1");
        expect(wrapper.find("div.post_title").at(1).text()).toEqual("hi");
        expect(wrapper.find("div.post_body").at(1).text()).toEqual("universe");
      });

});