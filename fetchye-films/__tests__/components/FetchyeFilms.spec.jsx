import React from 'react';
import { shallow } from 'enzyme';
import FetchyeFilms from '../../src/components/FetchyeFilms';

describe('FetchyeFilms should render as expected', () => {
  it('module should render correct JSX', () => {
    const renderedModule = shallow(<FetchyeFilms />);
    expect(renderedModule.find('div')).toMatchSnapshot();
  });
});
