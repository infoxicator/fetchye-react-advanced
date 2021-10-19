import React from 'react';
import { shallow } from 'enzyme';
import FetchyeUser from '../../src/components/FetchyeUser';

describe('FetchyeUser should render as expected', () => {
  it('module should render correct JSX', () => {
    const renderedModule = shallow(<FetchyeUser />);
    expect(renderedModule.find('div')).toMatchSnapshot();
  });
});
