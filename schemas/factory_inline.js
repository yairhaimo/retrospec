var Utils = require('../utils');

var schema = module.exports = {
  id: {
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
    ]
  },
  references: [
    {
      conditions: [],
      properties: {
        name: {
          path: 'arguments[0].value'
        },
        returnStatement: {
          conditions: [
            {
              path: 'arguments[1].body.body[0].type',
              value: 'ReturnStatement'
            }
          ],
          path: 'arguments[1].body.body[0].argument.properties'
        }
      }
    }
  ]
};
