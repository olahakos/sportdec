import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Main from './Main';

describe('<Main/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Main/>);
  });
  it('should have a NavigatorIOS components', () => {
    expect(wrapper.find('NavigatorIOS'))
      .to.have.length(1);
  });
});
