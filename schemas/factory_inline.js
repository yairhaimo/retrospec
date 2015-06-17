var schema = module.exports = {
  id: {
    type: 'FACTORY_INLINE',
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
  properties: {
    name: {
      path:'arguments[0].value'
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
};
