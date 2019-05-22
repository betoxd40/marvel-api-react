
import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import HeroDetails from "./index";
import Adapter from 'enzyme-adapter-react-16';
import Avatar from '../Avatar'
import { mockHero } from '../../mock'

configure({ adapter: new Adapter() });

let wrapper;

describe('HeroDetails Component', () => {
    it('should render without errors', () => {
        wrapper = shallow(
            <HeroDetails heroInfo={mockHero} />,
        );
    });
    it('should render a h2', () => {
        wrapper = mount(
            <HeroDetails heroInfo={mockHero} />,
        );
        expect(wrapper.find('h2').length).toEqual(1);
        expect(wrapper.find(Avatar).length).toEqual(1);

    });
});