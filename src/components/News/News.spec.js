import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import {getContent} from '../../utils/contentHelper';
import News from './News';

describe('<News/>', () => {
  let wrapper;
  const storeMock = {
    subscribe: () => {}
  };
  beforeEach(() => {
    wrapper = shallow(<News store={storeMock} MenuContext='View' FilterMenu='View' />);
  });
  it('should have a ScrollView component', () => {
    expect(wrapper.find('ScrollView'))
      .to.have.length(1);
  });
  it('should have a Search field', () => {
    expect(wrapper.find('TextInput'))
      .to.have.length(1);
  });
  it('should have an EmptyView if we have no data', () => {
    expect(wrapper.find('EmptyView'))
      .to.have.length(1);
  });
});

describe('getContent()', () => {
  const pathSource = require('../../../mock/news-mock.json');
  const pathSourceArticle = require('../../../mock/article-mock.json');
  const emptyPathSource = require('../../../mock/empty.json');
  const httpSource = 'http://some.dummy.com/asd.json';
  const httpsSource = 'https://some.dummy.com/asd.json';

  it('should handle a valid path parameter', () => {
    expect(getContent(pathSource))
      .to.be.an('array')
      .to.not.include.keys('error');
  });

  it('should return with error if the result is empty', () => {
    expect(getContent(emptyPathSource))
      .to.be.an('object')
      .to.include.keys('error');
  });

  it('should handle a valid path parameter and with article type', () => {
    expect(getContent(pathSourceArticle, 'article'))
      .to.be.an('object')
      .to.not.include.keys('error');
  });

  it('should return with error if the result is empty and with article type', () => {
    expect(getContent(emptyPathSource, 'article'))
      .to.be.an('object')
      .to.include.keys('error');
  });

  it('should handle a valid url parameter', () => {
    const res = getContent(httpSource);
    expect(res)
      .to.eql('url handeling');
  });
  it('should handle a valid secure url parameter', () => {
    const res = getContent(httpsSource);
    expect(res)
      .to.eql('url handeling');
  });
});
