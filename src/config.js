const config = {};

config.env = process.env.NODE_ENV || 'development';
config.isProd = config.env === 'production';
config.isTest = config.env === 'test';
config.isDev = config.env === 'development';

config.port = process.env.PORT || 8081;

config.colors = {
  white: '#fff',
  purple: '#443251'
};

config.tabs = [
  'Fixtures',
  'Table',
  'News'
];

module.exports = config;
