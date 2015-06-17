'use strict';
var fs = require('fs');
var _ = require('lodash');

var DELIMITER = '#';
var RESERVED_WORDS = [
  {
    word: 'last',
    action: function(node, str) {
      var res;
      var delimiteredWord = DELIMITER + this.word + DELIMITER;
      var targetArray = str.substr(0, str.indexOf('[' + delimiteredWord +']'));
      var targetValue = _.result(node, targetArray);
      if (targetValue) {
        var lastIndex = targetValue.length - 1;
        res = str.replace(delimiteredWord, lastIndex);
      }

      return res;
    }
  }
];


var Utils = function() {};

Utils.TYPES = {
  FACTORY: 'FACTORY',
  CONTROLLER: 'CONTROLLER'
};
Utils.SUBTYPES = {
  EXTERNAL: 'EXTERNAL',
  INLINE: 'INLINE',
  EXTERNAL_DI: 'EXTERNAL_DI',
  INLINE_DI: 'INLINE_DI'
};


Utils.walk = function(dir, done) {
    var results = [];
    fs.readdir(dir, function (err, list) {
        if (err) {
            return done(err);
        }
        var i = 0;
        (function next() {
            var file = list[i++];
            if (!file) {
                return done(null, results);
            }
            file = dir + '/' + file;
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function (err, res) {
                        results = results.concat(res);
                        next();
                    });
                } else {
                    results.push(file);
                    next();
                }
            });
        }());
    });
};

Utils.traverse = function traverse(object, visitor) {
    var key, child;

    if (visitor.call(null, object) === false) {
        return;
    }
    for (key in object) {
        if (object.hasOwnProperty(key)) {
            child = object[key];
            if (typeof child === 'object' && child !== null) {
                traverse(child, visitor);
            }
        }
    }
};

Utils.handleReservedWords = function(node, str) {
  var reservedWordRegEx, match;

  RESERVED_WORDS.forEach(function(entry) {
    reservedWordRegEx = new RegExp(DELIMITER + entry.word + DELIMITER);
    match = str.match(reservedWordRegEx);
    if (match) {
      str = entry.action(node, str) || str;
    }
  });

  return str;
};

Utils.interpolate = function(node, value) {
  // check if an interpolation is needed
  var valueMatches = value.match(/{{(.*)}}/);
  // get interpolated value if needed or regular value if not
  return valueMatches ? Utils.get(node, valueMatches[1]) : value;
};

Utils.haveConditionMatched = function(node, conditions, valueNode) {
  var conditionsMatched = true;
  var path, value;
  conditions.forEach(function(condition) {
    path = _.result(node, Utils.handleReservedWords(node, condition.path));
    value = Utils.interpolate(valueNode || node, condition.value);
    conditionsMatched = conditionsMatched && (path === value) && (path !== undefined);
  });

  return conditionsMatched;
};

Utils.get = function(node, value) {
  return _.result(node, Utils.handleReservedWords(node, value));
};

module.exports = Utils;
