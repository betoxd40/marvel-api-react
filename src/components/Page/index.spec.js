
import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Page from "./index";
import Adapter from 'enzyme-adapter-react-16';
import { mockTitle } from '../../mock'

configure({ adapter: new Adapter() });

let wrapper;

describe('Page Component', () => {
    it('should render without errors', () => {
        wrapper = shallow(
            <Page>
                <h1>{mockTitle}</h1>
            </Page>,
        );
    });
    it('should render a the correct properties', () => {
        wrapper = mount(
            <Page>
                <h1>{mockTitle}</h1>
            </Page>,
        );
        expect(wrapper.find('h1').length).toEqual(1);
        expect(wrapper.text()).toEqual(mockTitle);
    });
});