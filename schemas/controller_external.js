var Utils = require('../utils');

var schema = module.exports = {
  definition: {
    id: 'arguments[0].value',
    type: Utils.TYPES.CONTROLLER,
    subType: Utils.SUBTYPES.EXTERNAL,
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
    ],
    properties: {
      name: {
        path: 'arguments[0].value'
      }
    }
  },
  references: [
    // {
    //   conditions: [],
    //   properties: {
    //     name: {
    //       path:'arguments[0].value'
    //     }
    //   }
    // }
  ]
};
