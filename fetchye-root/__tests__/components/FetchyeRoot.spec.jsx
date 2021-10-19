import React from 'react';
import { shallow } from 'enzyme';
import { Route } from '@americanexpress/one-app-router';
import childRoutes from '../../src/childRoutes';
import FetchyeRoot from '../../src/components/FetchyeRoot';

describe('FetchyeRoot should render as expected', () => {
  describe('childRoutes', () => {
    it('should return an array of Routes', () => {
      expect(childRoutes()).toEqual(expect.any(Array));
      childRoutes().forEach((route) => expect(route.type).toEqual(Route));
    });
  });
  it('module should render correct JSX', () => {
    const renderedModule = shallow(<FetchyeRoot />);
    expect(renderedModule.find('div')).toMatchSnapshot();
  });
});
