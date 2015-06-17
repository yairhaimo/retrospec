var Utils = require('../utils');

var schema = module.exports = {
  definition: {
    id: 'arguments[0].value',
    type: Utils.TYPES.CONTROLLER,
    subType: Utils.SUBTYPES.INLINE,
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

//
// {
//   "type": "Program",
//   "body": [
//     {
//       "type": "ExpressionStatement",
//       "expression": {
//         "type": "CallExpression",
//         "callee": {
//           "type": "MemberExpression",
//           "computed": false,
//           "object": {
//             "type": "Identifier",
//             "name": "app"
//           },
//           "property": {
//             "type": "Identifier",
//             "name": "controller"
//           }
//         },
//         "arguments": [
//           {
//             "type": "Literal",
//             "value": "MainCtrl",
//             "raw": "'MainCtrl'"
//           },
//           {
//             "type": "FunctionExpression",
//             "id": null,
//             "params": [],
//             "defaults": [],
//             "body": {
//               "type": "BlockStatement",
//               "body": [
//                 {
//                   "type": "VariableDeclaration",
//                   "declarations": [
//                     {
//                       "type": "VariableDeclarator",
//                       "id": {
//                         "type": "Identifier",
//                         "name": "main"
//                       },
//                       "init": {
//                         "type": "ThisExpression"
//                       }
//                     }
//                   ],
//                   "kind": "var"
//                 }
//               ]
//             },
//             "generator": false,
//             "expression": false
//           }
//         ]
//       }
//     }
//   ],
//   "errors": []
// }
