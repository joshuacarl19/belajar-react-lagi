import WheeNavbar from './WheeNavbar';
import React from 'react';
import { shallow } from 'enzyme';
describe('Whee Navbar Components', () => {
    it('mencari text h1', () => {
        const wrapper = shallow(
            <WheeNavbar/>
        )
        expect(wrapper.html()).toEqual('<h1>Hello Joshua</h1>');
    })
})