import React from "react";
import { shallow } from "enzyme";
import NoFoundPage from "../../components/NoFoundPage";

test('should render NoFoundPage correctly', () => {
    const wrapper = shallow(<NoFoundPage />);
    expect(wrapper).toMatchSnapshot();
});