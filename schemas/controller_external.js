var schema = module.exports = {
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
  properties: {
    name: {
      path:'arguments[0].value'
    }
  }
};
