
import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import List from "./index";
import Adapter from 'enzyme-adapter-react-16';
import { mockListHeroes, mockOnClick } from '../../mock'

configure({ adapter: new Adapter() });

let wrapper;

describe('List Component', () => {
    it('should render without errors', () => {
        wrapper = shallow(
            <List list={mockListHeroes} onClickCard={mockOnClick} />,
        );
    });
});