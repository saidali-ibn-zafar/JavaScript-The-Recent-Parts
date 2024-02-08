## Tagged Literal Templates

We can think of a tag template as a function that takes in a mix of strings and variables and then formats them and returns them based on some conditions or rules that we apply. 

```js
function myTagFunction(strings, ...values) {
  console.log(strings);  // Array of string parts
  console.log(values);   // Array of interpolated values
}

let name = "John";
let age = 30;

myTagFunction`My name is ${name} and I am ${age} years old.`;

```
