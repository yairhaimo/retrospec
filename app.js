// retroSpec

var esprima = require('esprima');
var fs = require('fs');
var Utils = require('./utils');
var _ = require('lodash');
var schemas = require('./schemas');

var dirName = 'data';
var entities = {};

Utils.walk(dirName, function(err, results) {
  results.forEach(function(fileName) {
    var content, structure;

    try {
          content = fs.readFileSync(fileName, 'utf-8');
          structure = esprima.parse(content, { tolerant: true });

          // console.log(JSON.stringify(structure, null, 2));

          Utils.traverse(structure, function (node) {
            schemas.forEach(function(schema) {
              // check id conditions
              if (Utils.haveConditionMatched(node, schema.id.conditions)) {
                entities[Utils.get(node, schema.id.name)] = {node: node, schema: schema};
              }
            });
          });

          console.log('finished interating first time');

          Utils.traverse(structure, function (node) {
            _.forIn(entities, function(entity, key) {
              entity.schema.references.forEach(function(reference) {
                if (Utils.haveConditionMatched(node, reference.conditions)) {
                  reference.properties.forEach(function(property) {
                    console.log(property + ':' + JSON.stringify(_.result(node, Utils.get(node, reference.properties[property].path))));
                  });
                }
              });
            });
          });

                // schema.references.forEach(function(reference) {
                //   if (reference.conditions) {
                //     Utils.traverse(structure, function(innerNode) {
                //       console.log('checking conditions');
                //       if (Utils.haveConditionMatched(innerNode, reference.conditions)) {
                //         console.log('innerNode');
                //         Object.keys(reference.properties).forEach(function(property) {
                //           console.log(property + ':' + JSON.stringify(_.result(innerNode, Utils.interpolate(innerNode, reference.properties[property].path))));
                //         });
                //       }
                //     });
                //   }
                //   else {
                //     console.log('regular node');
                //     Object.keys(reference.properties).forEach(function(property) {
                //       console.log(property + ':' + JSON.stringify(_.result(node, Utils.interpolate(node, reference.properties[property].path))));
                //     });
                //   }
                //
                //
                //
                // });
              // }
            // });
      } catch (e) {
        console.warn(e);
      }

  });
});
