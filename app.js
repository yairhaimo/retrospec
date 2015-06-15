// retroSpec

var esprima = require('esprima');
var fs = require('fs');
var utils = require('./utils');
var _ = require('lodash');

var dirName = 'data';

var identifiers = {};

utils.walk(dirName, function(err, results) {
  console.log(results);
  results.forEach(function(fileName) {
    var shortName, first, content, syntax;

    shortName = fileName;
    first = true;

    // remove dirname from file name
    if (shortName.substr(0, dirName.length) === dirName) {
      shortName = shortName.substr(dirName.length + 1, shortName.length);
    }

    try {
          content = fs.readFileSync(fileName, 'utf-8');
          syntax = esprima.parse(content, { tolerant: true });
          console.log(JSON.stringify(syntax, null, 2));
          utils.traverse(syntax, function (node) {
            if ((node.type === 'VariableDeclaration') &&
                (node.declarations[0].id.type === 'Identifier')){
              identifiers[node.declarations[0].id.name] = node;
            }
          });

          utils.traverse(syntax, function (node) {

            if ((node.type === 'CallExpression') && (node.callee.property.name === 'factory')) {
              console.log('found a factory!', node.arguments[0].value);
              if (node.arguments[1].type === 'identifier') {

              }
            }

            // if (node.type === 'CallExpression') {
            //     checkSingleArgument(node);
            //     checkLastArgument(node);
            //     checkMultipleArguments(node);
            // }
          });
      } catch (e) {
        console.warn(e);
      }


  });
});
