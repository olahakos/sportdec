import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Welcome from './Welcome';

describe('<Welcome/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Welcome />);
  });
  it('should have a View component', () => {
    expect(wrapper.find('View'))
      .to.have.length(1);
  });
});
