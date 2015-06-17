var app = angular.module('myModule', []);

var myFact3 = function() {
  function Factory() {}
  Factory.getName = function() {
    var x = 1;
    return x;
  };
  Factory.address = 'Petah Tikva';

  return Factory;
};

app.factory('myFact3', myFact3);


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
//             "name": "app"
//           },
//           "init": {
//             "type": "CallExpression",
//             "callee": {
//               "type": "MemberExpression",
//               "computed": false,
//               "object": {
//                 "type": "Identifier",
//                 "name": "angular"
//               },
//               "property": {
//                 "type": "Identifier",
//                 "name": "module"
//               }
//             },
//             "arguments": [
//               {
//                 "type": "Literal",
//                 "value": "myModule",
//                 "raw": "'myModule'"
//               },
//               {
//                 "type": "ArrayExpression",
//                 "elements": []
//               }
//             ]
//           }
//         }
//       ],
//       "kind": "var"
//     },
//     {
//       "type": "VariableDeclaration",
//       "declarations": [
//         {
//           "type": "VariableDeclarator",
//           "id": {
//             "type": "Identifier",
//             "name": "myFact3"
//           },
//           "init": {
//             "type": "FunctionExpression",
//             "id": null,
//             "params": [],
//             "defaults": [],
//             "body": {
//               "type": "BlockStatement",
//               "body": [
//                 {
//                   "type": "FunctionDeclaration",
//                   "id": {
//                     "type": "Identifier",
//                     "name": "Factory"
//                   },
//                   "params": [],
//                   "defaults": [],
//                   "body": {
//                     "type": "BlockStatement",
//                     "body": []
//                   },
//                   "generator": false,
//                   "expression": false
//                 },
//                 {
//                   "type": "ExpressionStatement",
//                   "expression": {
//                     "type": "AssignmentExpression",
//                     "operator": "=",
//                     "left": {
//                       "type": "MemberExpression",
//                       "computed": false,
//                       "object": {
//                         "type": "Identifier",
//                         "name": "Factory"
//                       },
//                       "property": {
//                         "type": "Identifier",
//                         "name": "getName"
//                       }
//                     },
//                     "right": {
//                       "type": "FunctionExpression",
//                       "id": null,
//                       "params": [],
//                       "defaults": [],
//                       "body": {
//                         "type": "BlockStatement",
//                         "body": [
//                           {
//                             "type": "VariableDeclaration",
//                             "declarations": [
//                               {
//                                 "type": "VariableDeclarator",
//                                 "id": {
//                                   "type": "Identifier",
//                                   "name": "x"
//                                 },
//                                 "init": {
//                                   "type": "Literal",
//                                   "value": 1,
//                                   "raw": "1"
//                                 }
//                               }
//                             ],
//                             "kind": "var"
//                           },
//                           {
//                             "type": "ReturnStatement",
//                             "argument": {
//                               "type": "Identifier",
//                               "name": "x"
//                             }
//                           }
//                         ]
//                       },
//                       "generator": false,
//                       "expression": false
//                     }
//                   }
//                 },
//                 {
//                   "type": "ExpressionStatement",
//                   "expression": {
//                     "type": "AssignmentExpression",
//                     "operator": "=",
//                     "left": {
//                       "type": "MemberExpression",
//                       "computed": false,
//                       "object": {
//                         "type": "Identifier",
//                         "name": "Factory"
//                       },
//                       "property": {
//                         "type": "Identifier",
//                         "name": "address"
//                       }
//                     },
//                     "right": {
//                       "type": "Literal",
//                       "value": "Petah Tikva",
//                       "raw": "'Petah Tikva'"
//                     }
//                   }
//                 },
//                 {
//                   "type": "ReturnStatement",
//                   "argument": {
//                     "type": "Identifier",
//                     "name": "Factory"
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
//             "value": "myFact3",
//             "raw": "'myFact3'"
//           },
//           {
//             "type": "Identifier",
//             "name": "myFact3"
//           }
//         ]
//       }
//     }
//   ],
//   "errors": []
// }
