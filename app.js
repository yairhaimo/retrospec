// retroSpec

var esprima = require('esprima');
var fs = require('fs');
var utils = require('./utils');
var _ = require('lodash');
var schemas = require('./schemas');

var dirName = 'data';
var identifiers = {};

utils.walk(dirName, function(err, results) {
  results.forEach(function(fileName) {
    var content, structure;

    try {
          content = fs.readFileSync(fileName, 'utf-8');
          structure = esprima.parse(content, { tolerant: true });
          // console.log(JSON.stringify(structure, null, 2));

          utils.traverse(structure, function (node) {
            schemas.forEach(function(schema) {

              // check initial conditions
              var conditionsMatched = true;
              schema.id.conditions.forEach(function(condition) {
                conditionsMatched = conditionsMatched && (_.result(node, condition.path) === condition.value);
              });

              if (conditionsMatched) {
                console.log('found ' + schema.id.type);
                Object.keys(schema.properties).forEach(function(property) {
                  console.log(property + ':' + JSON.stringify(_.result(node, schema.properties[property].path)));
                });
              }
            });
          });
      } catch (e) {
        console.warn(e);
      }
  });
});
