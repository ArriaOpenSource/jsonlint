if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
  exports.formatter = require('./formatter').formatter;
  exports.parser = require('./jsonlint').parser;
  exports.parse = require('./jsonlint').parse;
}
