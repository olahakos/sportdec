import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import EmptyView from './EmptyView';

describe('<EmptyView/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EmptyView />);
  });
  it('should have a View component', () => {
    expect(wrapper.find('View'))
      .to.have.length(1);
  });
  it('should have 2 Text components', () => {
    expect(wrapper.find('Text'))
      .to.have.length(2);
  });
});
