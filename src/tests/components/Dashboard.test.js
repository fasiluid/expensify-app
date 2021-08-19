import React from "react";
import { shallow } from "enzyme";
import DashboardPage from '../../components/Dashboard';

test('Should render Dashboard page correctly', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper).toMatchSnapshot();
});