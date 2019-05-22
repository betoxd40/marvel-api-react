
import React from 'react';
import { shallow, configure } from 'enzyme';
import Avatar from "./index";
import Adapter from 'enzyme-adapter-react-16';
import { mockImage } from '../../mock'

configure({ adapter: new Adapter() });

let wrapper;

describe('Avatar Component', () => {
    it('should render without errors', () => {
        wrapper = shallow(
            <Avatar
                url={mockImage} />,
        );
    });
});