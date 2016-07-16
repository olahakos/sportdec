import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Tab from './Tab';

describe('<Tab/>', () => {
  let wrapper;
  const ScrollableTabViewMock = 'View';
  const tabConfigMock = {
    active: 1,
    tabs: [
      'Tab 1',
      'Tab 2',
      'Tab 3'
    ]
  };
  const titleMock = 'Title 123';

  beforeEach(() => {
    wrapper = shallow(<Tab
      ScrollableTabView={ScrollableTabViewMock}
      title={titleMock}
      tabConfig={tabConfigMock}
    />);
  });
  it('should have load the given Welcome components', () => {
    expect(wrapper.find('Welcome'))
      .to.have.length(tabConfigMock.tabs.length - 1);
  });
  it('should have one News components', () => {
    expect(wrapper.find('News'))
      .to.have.length(1);
  });
});
