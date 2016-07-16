const config = {};

config.env = process.env.NODE_ENV || 'development';
config.isProd = config.env === 'production';
config.isTest = config.env === 'test';
config.isDev = config.env === 'development';

config.port = process.env.PORT || 8081;

config.datas = {
  feed: process.env.DATA_NEWS || 'mock/news-mock.json',
  article: process.env.DATA_ARTICLE || 'mock/article-mock.json'
};

config.imageBase = process.env.IMAGE_BASE_URL || 'http://google.com/';

config.colors = {
  white: '#fff',
  purple: '#443251',
  lightBlue: '#04cbc2',
  grey: '#999'
};

config.tabConfig = {
  active: 2,
  tabs: [
    'Fixtures',
    'Table',
    'News'
  ]
};

module.exports = config;
