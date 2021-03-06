const config = {};

config.env = process.env.NODE_ENV || 'development';
config.isProd = config.env === 'production';
config.isTest = config.env === 'test';
config.isDev = config.env === 'development';

config.port = process.env.PORT || 8081;

config.datas = {
  news: require('../mock/news-mock.json'),
  article: require('../mock/article-mock.json')
};

config.colors = {
  white: '#fff',
  purple: '#443251',
  lightBlue: '#04cbc2',
  grey: '#999',
  purple50: (0x443251aa),
  darkWhite: '#F5FCFF',
  darkGray: '#333333',
  lightGray: '#CCCCCC'
};

config.tabConfig = {
  active: 2,
  tabs: [
    'Fixtures',
    'Table',
    'News'
  ]
};

config.sorting = [
  {
    type: 'ABC_ASC',
    text: 'By Headline ASC'
  },
  {
    type: 'ABC_DESC',
    text: 'By Headline DESC'
  },
  {
    type: 'DATE_ASC',
    text: 'By Date ASC'
  },
  {
    type: 'DATE_DESC',
    text: 'By Date DESC'
  }
];

module.exports = config;
