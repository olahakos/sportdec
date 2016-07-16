import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Article from './Article';

describe('<Article/>', () => {
  let wrapper;
  let mockArticle = {
    'publishedTime': 1459348530000,
    'headline': 'Headline',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
        'rel': 'IMAGE_MOBILE',
        'url': 'http://talksport.com/sites/default/files/styles/large/public/field/image/201606/gettyimages-538226802.jpg?itok=RUa7ZE4u'
      }
    ],
    'id': '1'
  };
  beforeEach(() => {
    wrapper = shallow(<Article article={mockArticle} />);
  });
  it('should have at least 2 View component', () => {
    expect(wrapper.find('View'))
      .to.have.length.above(1);
  });
  it('should have at least one Image', () => {
    expect(wrapper.find('Image'))
      .to.have.length.above(0);
  });
  it('should have at least 3 Text', () => {
    expect(wrapper.find('Text'))
      .to.have.length.above(2);
  });
});
