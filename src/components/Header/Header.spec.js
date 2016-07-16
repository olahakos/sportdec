import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Header from './Header';

describe('<Header/>', () => {
  let wrapper;
  let titleTest = 'Premier League';
  beforeEach(() => {
    wrapper = shallow(<Header title={titleTest} />);
  });
  it('should have a View component', () => {
    expect(wrapper.find('View'))
      .to.have.length(1);
  });
});
