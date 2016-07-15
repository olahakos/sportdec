import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Main from './Main';

describe('<Main/>', () => {
  let wrapper;
  let ScrollableTabViewMock = 'View';
  beforeEach(() => {
    wrapper = shallow(<Main ScrollableTabView={ScrollableTabViewMock}/>);
  });
  it('should have a Header component', () => {
    expect(wrapper.find('Header'))
      .to.have.length(1);
  });
  it('should have load 3 Welcome components', () => {
    expect(wrapper.find('Welcome'))
      .to.have.length(3);
  });
});
