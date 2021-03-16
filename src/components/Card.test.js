import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './Card.js';
configure({ adapter: new Adapter() })

describe('<CardRows/>', () => {
    const props = {
        card: { "code": "5S", image: "image.png" },
        cardsFlipped: [],
        index: 0,
        attemptMatch: jest.fn()
    };

    const props2cards = {
        card: { "code": "5S", image: "image.png" },
        cardsFlipped: [{ "code": "7S", image: "image.png" }, { "code": "6S", image: "image.png" }],
        index: 0,
        attemptMatch: jest.fn()
    };

    const propsMatched = {
        card: { "code": "5S", image: "image.png", isMatched: true },
        cardsFlipped: [],
        index: 0,
        attemptMatch: jest.fn()
    };

    const propsFlipped = {
        card: { "code": "5S", image: "image.png" },
        cardsFlipped: [{ "code": "5S", image: "image.png", index: 0 }],
        index: 0,
        attemptMatch: jest.fn()
    };

    it('renders when there is card', () => {
        const wrapper = shallow(<Card {...props} />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find("img").length).toEqual(1);
    });

    it('calls function', () => {
        const wrapper = shallow(<Card {...props} />);
        wrapper.find('div').simulate('click');
        expect(props.attemptMatch).toBeCalledTimes(1);
    });

    it('does not call function', () => {
        const wrapper = shallow(<Card {...props2cards} />);
        wrapper.find('div').simulate('click');
        expect(props.attemptMatch).toBeCalledTimes(0);
    });

    it('renders correct image', () => {
        const wrapper = shallow(<Card {...props} />);
        expect(wrapper.find('img').props().src).toEqual('https://res.cloudinary.com/osidekweenyasss/image/upload/v1539213795/cardback.png')
    });

    it('renders correct image when card flipped', () => {
        const wrapper = shallow(<Card {...propsFlipped} />);
        expect(wrapper.find('img').props().src).toEqual('image.png')
    });

    it('renders correct image when card matched', () => {
        const wrapper = shallow(<Card {...propsMatched} />);
        expect(wrapper.find('img').props().src).toEqual('https://i.imgur.com/d4iyhbf.jpg')
    });

});