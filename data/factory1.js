// FACTORY_INLINE

app.factory('myFact1', function() {
  return {name: 'yair'};
});

// {
//   "type": "ExpressionStatement",
//   "expression": {
//     "type": "CallExpression",
//     "callee": {
//       "type": "MemberExpression",
//       "computed": false,
//       "object": {
//         "type": "Identifier",
//         "name": "app"
//       },
//       "property": {
//         "type": "Identifier",
//         "name": "factory"
//       }
//     },
//     "arguments": [
//       {
//         "type": "Literal",
//         "value": "myFact",
//         "raw": "'myFact'"
//       },
//       {
//         "type": "FunctionExpression",
//         "id": null,
//         "params": [],
//         "defaults": [],
//         "body": {
//           "type": "BlockStatement",
//           "body": [
//             {
//               "type": "ReturnStatement",
//               "argument": {
//                 "type": "ObjectExpression",
//                 "properties": [
//                   {
//                     "type": "Property",
//                     "key": {
//                       "type": "Identifier",
//                       "name": "name"
//                     },
//                     "computed": false,
//                     "value": {
//                       "type": "Literal",
//                       "value": "yair",
//                       "raw": "'yair'"
//                     },
//                     "kind": "init",
//                     "method": false,
//                     "shorthand": false
//                   }
//                 ]
//               }
//             }
//           ]
//         },
//         "generator": false,
//         "expression": false
//       }
//     ]
//   }
// }
