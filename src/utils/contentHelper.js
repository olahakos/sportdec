import _ from 'lodash';
import validator from 'validator';

export function getContent(source, type) {
  const res = getJSON(source);
  if (_.isEmpty(res)) {
    return handleError('The result is empty');
  }
  if (type === 'article') {
    return validateArticle(res);
  } else {
    return validateNews(res);
  }
}

function validateNews(res) {
  return res;
}

function validateArticle(res) {
  return res;
}

function getJSON(source) {
  if (validator.isURL(source)) {
    // The source is an URL
    return 'url handeling';
  } else {
    // The source is a path
    return require(source);
  }
}

function handleError(msg) {
  return {
    error: msg
  };
}
