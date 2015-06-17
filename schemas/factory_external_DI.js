var Utils = require('../utils');

var schema = module.exports = {
  definition: {
    id: 'arguments[1].elements[#last#].name',
    type: Utils.TYPES.FACTORY,
    subType: Utils.SUBTYPES.EXTERNAL_DI,
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
        value: 'ArrayExpression'
      }
    ],
    properties: {
      name: {
        path: 'arguments[1].elements[#last#].name'
      }
    }
  },
  references: [
    {
      conditions: [
        {
          path: 'id.name',
          value: '{{arguments[1].elements[#last#].name}}',
        }
      ],
      properties: {
        name: {
          path: 'id.name'
        },
        bodyType: {
          path: 'init.body.body[0].type'
        }
      }
    }
  ]
};


// {
//   "type": "Program",
//   "body": [
//     {
//       "type": "VariableDeclaration",
//       "declarations": [
//         {
//           "type": "VariableDeclarator",
//           "id": {
//             "type": "Identifier",
//             "name": "myFact2"
//           },
//           "init": {
//             "type": "FunctionExpression",
//             "id": null,
//             "params": [
//               {
//                 "type": "Identifier",
//                 "name": "SOME_SERVICE"
//               }
//             ],
//             "defaults": [],
//             "body": {
//               "type": "BlockStatement",
//               "body": [
//                 {
//                   "type": "ReturnStatement",
//                   "argument": {
//                     "type": "ObjectExpression",
//                     "properties": [
//                       {
//                         "type": "Property",
//                         "key": {
//                           "type": "Identifier",
//                           "name": "age"
//                         },
//                         "computed": false,
//                         "value": {
//                           "type": "Literal",
//                           "value": 32,
//                           "raw": "32"
//                         },
//                         "kind": "init",
//                         "method": false,
//                         "shorthand": false
//                       }
//                     ]
//                   }
//                 }
//               ]
//             },
//             "generator": false,
//             "expression": false
//           }
//         }
//       ],
//       "kind": "var"
//     },
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
//             "name": "factory"
//           }
//         },
//         "arguments": [
//           {
//             "type": "Literal",
//             "value": "myFact2",
//             "raw": "'myFact2'"
//           },
//           {
//             "type": "ArrayExpression",
//             "elements": [
//               {
//                 "type": "Literal",
//                 "value": "SOME_SERVICE",
//                 "raw": "'SOME_SERVICE'"
//               },
//               {
//                 "type": "Identifier",
//                 "name": "myFact2"
//               }
//             ]
//           }
//         ]
//       }
//     }
//   ],
//   "errors": []
// }
