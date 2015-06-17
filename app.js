// retroSpec

var esprima = require('esprima');
var fs = require('fs');
var Utils = require('./utils');
var _ = require('lodash');
var schemas = require('./schemas');

var dirName = 'data';
var entities = {};

Utils.walk(dirName, function(err, results) {
  // TODO: refactor complexity of loops
  results.forEach(function(fileName) {
    var content, structure, componentId;

    try {
          content = fs.readFileSync(fileName, 'utf-8');
          structure = esprima.parse(content, { tolerant: true });
          // console.log(JSON.stringify(structure, null, 2));

          // create entities
          Utils.traverse(structure, function (node) {
            schemas.forEach(function(schema) {
              // check id conditions
              if (Utils.haveConditionMatched(node, schema.definition.conditions)) {
                componentId = Utils.get(node, schema.definition.id);
                // console.log('found ' + schema.id.type + '_' + schema.id.subType, componentId);
                entities[componentId] = {node: node, schema: schema, properties: {}};

                _.forIn(schema.definition.properties, function(propertyDefinition, property) {
                  var value = Utils.get(node, propertyDefinition.path);
                  entities[componentId].properties[property] = value;
                });
              }
            });
          });

          // attach references
          Utils.traverse(structure, function (node) {
            _.forIn(entities, function(entity, key) {
              entity.schema.references.forEach(function(reference) {
                if (Utils.haveConditionMatched(node, reference.conditions, entity.node)) {
                  _.forIn(reference.properties, function(propertyDefinition, property) {
                    var value = Utils.get(node, propertyDefinition.path);
                    entity.properties[property] = value;
                  });
                }
              });
            });
          });

      } catch (e) {
        console.warn(e);
      }

  });

  _.forIn(entities, function(entity, key) {
    console.log('****' + key, entity);
  });
});
