import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import NewsElement from './NewsElement';

describe('<NewsElement/>', () => {
  let wrapper;
  let mockElement = {
    'publishedTime': 1459348530000,
    'headline': 'Headline',
    'keywords': [
      {
        'id': 1,
        'keyword': 'Key 1',
        'typeName': 'Type 1',
        'type': 1
      },
      {
        'id': 2,
        'keyword': 'Key 2',
        'typeName': 'Type 2',
        'type': 2
      }
    ],
    'links': [
      {
        'url': 'http://talksport.com/sites/default/files/styles/large/public/field/image/201606/gettyimages-538226802.jpg?itok=RUa7ZE4u'
      }
    ],
    'id': '1'
  };
  beforeEach(() => {
    wrapper = shallow(<NewsElement data={mockElement} />);
  });
  it('should have an Image component', () => {
    expect(wrapper.find('Image'))
      .to.have.length(1);
  });
  it('should have a Headline and a Subheadline', () => {
    expect(wrapper.find('Text'))
      .to.have.length(2);
  });
});
