var Utils = require('../utils');

var schema = module.exports = {
  definition: {
    id: 'arguments[0].value',
    type: Utils.TYPES.FACTORY,
    subType: Utils.SUBTYPES.INLINE,
    conditions: [
      {
        path: 'type',
        value: 'CallExpression'
      },
      {
        path: 'callee.property.name',
        value: 'factory'
      },
      {
        path: 'arguments[1].type',
        value: 'FunctionExpression'
      }
    ],
    properties: {
      name: {
        path: 'arguments[0].value'
      }
    }
  },
  references: [
    {
      conditions: [
        {
          path: 'arguments[1].body.body[0].type',
          value: 'ReturnStatement'
        }
      ],
      properties: {
        returnStatement: {
          path: 'arguments[1].body.body[0].argument.properties'
        }
      }
    }
  ]
};
