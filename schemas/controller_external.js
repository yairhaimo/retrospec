var Utils = require('../utils');

var schema = module.exports = {
  type: Utils.TYPES.CONTROLLER,
  subType: Utils.SUBTYPES.EXTERNAL,
  id: {
    type: 'CONTROLLER_EXTERNAL',
    conditions: [
      {
        path: 'type',
        value: 'CallExpression'
      },
      {
        path: 'callee.property.name',
        value: 'controller'
      },
      {
        path: 'arguments[1].type',
        value: 'Identifier'
      }
    ]
  },
  references: [
    {
      conditions: [],
      properties: {
        name: {
          path:'arguments[0].value'
        }
      }
    }
  ]
};
