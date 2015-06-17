// FACTORY_EXTERNAL

var myFact2 = function() {
  return {age: 32};
};
app.factory('myFact2', myFact2);

// {
//    "type": "VariableDeclaration",
//    "declarations": [
//      {
//        "type": "VariableDeclarator",
//        "id": {
//          "type": "Identifier",
//          "name": "myFact2"
//        },
//        "init": {
//          "type": "FunctionExpression",
//          "id": null,
//          "params": [],
//          "defaults": [],
//          "body": {
//            "type": "BlockStatement",
//            "body": [
//              {
//                "type": "ReturnStatement",
//                "argument": {
//                  "type": "ObjectExpression",
//                  "properties": [
//                    {
//                      "type": "Property",
//                      "key": {
//                        "type": "Identifier",
//                        "name": "age"
//                      },
//                      "computed": false,
//                      "value": {
//                        "type": "Literal",
//                        "value": 32,
//                        "raw": "32"
//                      },
//                      "kind": "init",
//                      "method": false,
//                      "shorthand": false
//                    }
//                  ]
//                }
//              }
//            ]
//          },
//          "generator": false,
//          "expression": false
//        }
//      }
//    ],
//    "kind": "var"
//  },
//  {
//    "type": "ExpressionStatement",
//    "expression": {
//      "type": "CallExpression",
//      "callee": {
//        "type": "MemberExpression",
//        "computed": false,
//        "object": {
//          "type": "Identifier",
//          "name": "app"
//        },
//        "property": {
//          "type": "Identifier",
//          "name": "factory"
//        }
//      },
//      "arguments": [
//        {
//          "type": "Literal",
//          "value": "myFact2",
//          "raw": "'myFact2'"
//        },
//        {
//          "type": "Identifier",
//          "name": "myFact2"
//        }
//      ]
//    }
//  }
